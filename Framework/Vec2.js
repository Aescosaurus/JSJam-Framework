function Vec2_( x = 0,y = 0 )
{
	this.x = x;
	this.y = y;
	// 
	this.Add=( other )=>
	{
		this.x += other.x;
		this.y += other.y;
		
		return this;
	}
	
	this.GetAdd=( other )=>
	{
		return( this.Clone().Add( other ) );
	}
	
	this.Sub=( other )=>
	{
		this.x -= other.x;
		this.y -= other.y;
		
		return( this );
	}
	
	this.GetSub=( other )=>
	{
		return( this.Clone().Subtract( other ) );
	}
	
	this.Mult=( amount )=>
	{
		this.x *= amount;
		this.y *= amount;
		
		return( this );
	}
	
	this.GetMult=( amount )=>
	{
		return( this.Clone().Mult( amount ) );
	}
	
	this.Div=( amount )=>
	{
		this.x /= amount;
		this.y /= amount;
		
		return( this );
	}
	
	this.GetDiv=( amount )=>
	{
		return( this.Clone().Div( amount ) );
	}
	
	this.Normalize=()=>
	{
		const div = Math.sqrt( this.x * this.x + this.y * this.y );
		if( div === 0 )
		{
			return( this );
		}
		
		this.x = this.x / div;
		this.y = this.y / div;
		
		return( this );
	}
	
	this.GetNormalized=()=>
	{
		return( this.Clone().Normalize() );
	}
	
	this.GetLengthSq=()=>
	{
		return( this.x * this.x + this.y * this.y );
	}
	
	this.GetLength=()=>
	{
		return Math.sqrt( this.GetLengthSq() );
	}
	
	this.Equals=( other )=>
	{
		return( this.x == other.x && this.y == other.y );
	}
	
	this.Clone=()=>
	{
		return( new Vec2( this.x,this.y ) );
	}
}

function Vec2( x = 0,y = 0 )
{
	return( new Vec2_( x,y ) );
}