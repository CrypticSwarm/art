/*
Script: ART.Shape.js

License:
	MIT-style license.
*/

// ART.Shape Class stub.
// Will probably support defining shapes as json at some point.
// Right now, its just functions.

ART.Shape = function(shape){
	return shape;
};

ART.Paint.defineShape = function(name, shape){
	ART.Shape[name.camelCase()] = new ART.Shape(shape);
	return this;
};

ART.Paint.defineShapes = function(shapes){
	for (var shape in shapes) this.defineShape(shape, shapes[shape]);
	return this;
};

ART.Paint.lookupShape = function(name){
	return ART.Shape[name.camelCase()];
};

// connect to ART.Paint

ART.Paint.implement({

	getXY: function(size) {
		return $type(size) == "number" ? { x: size, y: size } : size;
	},

	shape: function(shape){
		var args = Array.slice(arguments, 1);
		if (typeof shape == 'string') shape = ART.Paint.lookupShape(shape.camelCase());
		if (!shape) return this;
		this.save();
		shape.apply(this, args);
		return this.restore();
	}
	
});

// default shapes

ART.Paint.defineShapes({

	rectangle: function(end){
		end = this.getXY(end);
		this.lineBy({x: end.x, y: 0}).lineBy({x: 0, y: end.y}).lineBy({x: -end.x, y: 0}).lineBy({x: 0, y: -end.y});
	},
	
	ellipse: function(end){
		end = this.getXY(end);
		var radius = {x: end.x / 2, y: end.y / 2};
		this.moveBy({x: 0, y: radius.y});
		this.roundCapLeftBy({x: radius.x, y: -radius.y}).roundCapRightBy({x: radius.x, y: radius.y});
		this.roundCapLeftBy({x: -radius.x, y: radius.y}).roundCapRightBy({x: -radius.x, y: -radius.y});
		this.moveBy({x: end.x, y: - radius.y + end.y});
	},
	
	roundedRectangle: function(end, radius){
		end = this.getXY(end);
		if (radius == null) radius = [5, 5, 5, 5];
		if (typeof radius == 'number') radius = [radius, radius, radius, radius];
		
		var tl = radius[0], tr = radius[1], br = radius[2], bl = radius[3];
		
		this.moveBy({x: 0, y: tl});
		
		if (end.x < 0) this.moveBy({x: end.x, y: 0});
		if (end.y < 0) this.moveBy({x: 0, y: end.y});
		
		if (tl > 0) this.roundCapLeftBy({x: tl, y: -tl});
		this.lineBy({x: Math.abs(end.x) - (tr + tl), y: 0});
		
		if (tr > 0) this.roundCapRightBy({x: tr, y: tr});
		this.lineBy({x: 0, y: Math.abs(end.y) - (tr + br)});
		
		if (br > 0) this.roundCapLeftBy({x: -br, y: br});
		this.lineBy({x: - Math.abs(end.x) + (br + bl), y: 0});
		
		if (bl > 0) this.roundCapRightBy({x: -bl, y: -bl});
		this.lineBy({x: 0, y: - Math.abs(end.y) + (bl + tl)});
		
		this.moveBy({x: end.x, y: -tl + end.y});
	},

	triangle: function(size, direction){
		size = this.getXY(size);
		var x = size.x,
			y = size.y;
		switch(direction) {
			case 'left':
				this.shift({x: 0, y: y/2})
					.lineBy({x: x, y: -y/2})
					.lineBy({x: 0, y: y})
					.lineBy({x: -x, y: -y/2});
				break;
			case 'up':
				this.shift({x: x/2, y: 0});
				this.lineBy({x: x/2, y: y})
					.lineBy({x: -x, y: 0})
					.lineBy({x: x/2, y: -y});
				break;
			case 'down':
				this.lineBy({x: x, y: 0})
					.lineBy({x: -x/2, y: y})
					.lineBy({x: -x/2, y: -y});
				break;
			default: //right
				this.lineBy({x: x, y: y/2})
					.lineBy({x: -x, y: y/2})
					.lineBy({x: 0, y: -y});
				break;
		}
	}
	
});

// And some extra glyphs

ART.Paint.defineShape('horizontal-pill', function(size){
	size = this.getXY(size);
	var r = (size.y / 2);
	this.shape('rounded-rectangle', {x: size.x, y: size.y}, r);
});

ART.Paint.defineShape('vertical-pill', function(size){
	size = this.getXY(size);
	var r = (size.x / 2);
	this.shape('rounded-rectangle', {x: size.x, y: size.y}, r);
});

ART.Paint.defineShape('plus-icon', function(size){
	size = this.getXY(size);
	this.moveBy({x: 0, y: (size.y / 2)});
	this.lineBy({x: size.x, y: 0});
	this.moveBy({x: -(size.x / 2), y: -(size.y / 2)});
	this.lineBy({x: 0, y: size.y});
});

ART.Paint.defineShape('resize-icon', function(size){
	size = this.getXY(size);
	this.moveBy({x: size.x, y: 0});
	this.lineBy({x: -size.x, y: size.y});
});

ART.Paint.defineShape('minus-icon', function(size){
	size = this.getXY(size);
	this.moveBy({x: 0, y: (size.y / 2)});
	this.lineBy({x: size.x, y: 0});
});

ART.Paint.defineShape('search-icon', function(size){
	size = this.getXY(size);
	ratio = 0.8;
	var max = ratio, min = 1 - ratio;
	this.shape('ellipse', {x: size.x * max, y: size.y * max});
	var lift = {x: -(size.x * min) / 2, y: -(size.y * min) / 2};
	this.moveBy(lift);
	this.lineBy({x: (size.x * min) - lift.x, y: (size.y * min) - lift.y});
});

ART.Paint.defineShape('close-icon', function(size){
	size = this.getXY(size);
	this.moveBy({x: size.x, y: 0});
	this.lineBy({x: -size.x, y: size.y});
	this.moveBy({x: 0, y: -size.y});
	this.lineBy({x: size.x, y: size.y});
});

ART.Paint.defineShape('refresh', function(size, options){
	size = this.getXY(size);

	options = $merge({
		stroke: {
			x: size.x / 12,
			y: size.y / 12
		}
	}, options);

	var rad = {
		x: size.x / 4,
		y: size.y / 4
	};

	var stroke = this.getXY(options.stroke);

	this.roundCapRightBy({x: -rad.x, y: rad.y});
	this.roundCapLeftBy({x: rad.x, y: rad.x});
	this.roundCapRightBy({x: rad.x, y: -rad.x});
	this.lineBy({x: -stroke.x, y: 0});
	this.roundCapLeftBy({x: -rad.x + stroke.y, y: size.y/4 - stroke.y});
	this.roundCapRightBy({x: -rad.x + stroke.y, y: - size.y/4 + stroke.y});
	this.roundCapLeftBy({x: rad.x - stroke.y, y: - size.y/4 + stroke.y});

	this.moveBy({x: 0, y: (-stroke.y - rad.y) / 2});
	this.shape('triangle', {x: rad.x, y:rad.y}, 'right');
});