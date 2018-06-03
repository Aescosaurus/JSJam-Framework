"use strict";

(function()
{
const gfx = new Graphics();
const kbd = new Keyboard();
const ms = new Mouse();
const sfx = new Sound();

window.onload = function()
{
	Start();
	const fps = 30;
	setInterval( function()
	{
		Update();
		Draw();
	},1000 / fps );
}

function Start()
{
	kbd.Start();
	ms.Start( gfx.GetCanvas() );
	gfx.Start();
	// Initialize below!
	
}

function Update()
{
	// Update below.
	
}

function Draw()
{
	gfx.DrawRect( Vec2( 0,0 ),gfx.ScreenSize,"black" );
	// Draw below.
	
}
})();