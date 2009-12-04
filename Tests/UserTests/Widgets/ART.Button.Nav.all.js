{
	tests: [
		{
			title: "Makes two directional Buttons",
			description: "Makes two buttons that you can click and stuff. One points left, the other right.",
			verify: "Do the buttons exist? Do they have left and right arrows?",
			before: function(){
				var a = new ART.Button({ className: 'navLeft' });
				$(a).inject('container').setStyles({
					padding: '10px 0px 0px 10px',
					float: 'left'
				});
				var b = new ART.Button({ className: 'navRight' });
				$(b).inject('container').setStyles({
					padding: '10px 0px 0px',
					float: 'left'
				});
				
			}
		}
	],
	otherScripts: ['touch', 'MgOpen.Moderna', 'MgOpen.Moderna.Bold', 'Selectors']
}
