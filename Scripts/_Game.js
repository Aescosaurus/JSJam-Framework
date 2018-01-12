"use strict";

(function()
{
const gfx = new Graphics();
const kbd = new Keyboard();
const ms = new Mouse();
const sfx = new Audio();

const ex = new Example();

window.onload = function()
{
	Start();
	const fps = 60;
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
	ex.Start( gfx );
	
}

function Update()
{
	// Update below.
	ex.Update( ms );
	
}

function Draw()
{
	gfx.DrawRect( new Vec2( 0,0 ),new Vec2( gfx.ScreenWidth,gfx.ScreenHeight ),"#000" );
	// Draw below.
	ex.Draw( gfx );
	
}
})()