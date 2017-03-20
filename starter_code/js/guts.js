// All the code you will need to create for this project will be completed below
// Your functions must be called the following:
    // multiply, divide, subtract, add, power, square_root, logBase10, generateRandomNumber


function divide(x,y)
{
    if(y===0) {
        return 0
    }
    return x/y;
    
    
}

function multiply(x,y)
{
	return x * y;
}

function subtract(x,y)
{
	return x -y;
}

function add(x,y)
{
	return x + y;
}

function power(x,y)
{
    var power = Math.pow(x,y);
    return power;
 
}


function square_root(x)
{
    var root = Math.sqrt(x);
    return root;
}

function logBase10(x)
{
    var log10 = Math.log10(x);
    return log10;
}

function generateRandomNumber()
{
    var random = Math.random();
    return random * 106;
}
