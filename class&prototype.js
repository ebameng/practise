// 一个简单的javascript类
	//通过原型继承创建一个新对象
function inherit(p) {
	if(p == null) throw TypeError();  //p是一个对象，但是不能是null
	if (Object.create) 	//如果Object.create()存在则直接使用这个函数创建
		return Object.create(p);
	var t = typeof p;  //否则进行进一步检测
	if (t !== "object" && t !== "function") throw TypeError();
	function f() {}; //定义一个空的构造函数
	f.prototype = p; //将它的原型prototype设置为p
	return new f();		//使用f()创建p的继承对象
}

function range(from, to) {
	var r = inherit(range.methods);
	r.from = from;
	r.to = to;
	return r;
}
range.methods = {
	includes: function(x) {
		return this.form <= x && x <= this.to;
	},
	foreach: function(f) {
		for (var x = Math.ceil(this.form); x <= this.to; x++)
			f(x);
	},
	toString: function() {
		return "(" + this.from + "..." + this.to + ")";
	}
};
var r = range(1, 3);
r.includes(2);
r.foreach(console.log);
console.log(r);

//使用构造函数来定义“范围类”
function Range(from, to) {
	this.from = from;
	this.to = to;
}  //构造函数
Range.prototype = {
	includes: function (x) {
		return this.form <= x && x <= this.to;
	},
	foreach: function (f) {
		for (var x = Math.ceil(this.form); x <= this.io; x++)
			f(x);
	},
	toString: function() {
		return "(" + this.form + "..." + this.to + ")";
	}
};

var r = range(1, 3);
r.includes(2);
r.foreach(console.log);
console.log(r);

r instanceof Range; //如果r继承自Range.prototype,则返回true.
//instanceof 可以检测某个对象是不是另一个对象的实例。
//更重的一点是instanceof可以在继承关系中用来判断一个实例是否属于它的父类型。


//constructor
var F = function() {};
var p = F.prototype;
var c = p.constructor;
c === F;

Range.prototype = {
	constructor: Range, //显示设置构造函数反向引用
	includes: function(x) {
		return this.form <= x && x <= this.to;
	},
	foreach: function(f) {
		for(var x = Math.ceil(this.form); x <= this.too; x++)
			f(x);
	},
	toString: function() {
		return "(" + this.form + "..." + this.to + ")";
	}
}


function defineClass(constructor, methods, statics) {
	if (methods)
		extend(constructor.prototype, methods);
	if (statics) 
		extend(constructor, statics);
}

var SimpleRange = defineClass(function(f, t) {
	this.f = f;
	this.t = t;
},
{
	includes: function(x) {
		return this.f <= x && x <= this.t;
	},
	toString: function() {
		return this.f + "..." + this.t;
	}
},
{
	upto: function(t) {
		return new SimpleRange(0, t);
	}
});


function Complex(real, imaginary) {
	if (isNaN(real) || isNaN(imaginary))
		throw new TypeError();
	this.r =real;
	this.i = imaginary;
}

Complex.prototype.add = function (that) {
	return new Complex(this.r + that.r, this.i + that.i);
}
Complex.prototype.mul = function (that) {
	return new Complex(this.r * that.r - this.i * that.i, this.r * that.i + this.i * that.r);
}
Complex.prototype.mag = function () {
	return Math.sqrt(this.r * this.r + this.i * this.i);
}

//类的扩充 即是给可以使用类的prototype属性来扩展类的属性和方法，在实际开发当中，当javascript内置的
//那些类所提供的动态方法和动态属性不满足我们实际开发时，我们就可以通过“prototype”属性给自定义类
//添加方法和属性或者扩展原有的类中的方法和属性
	
	/*类名.prototype.方法名 = function([param1],[param2],....[paramn]) {
　　　　.................
　　}
　　[param1],[param2],....[paramn]这些参数都是可选的
　　使用这种方式给类添加的扩展方法都是动态的，动态方法是针对类的实例对象的，所以调用必须要用"对象.方法名"的形式去调用，不能用"类名.方法名"的形式去调用！*/

//测试扩展String类，为String类增加quote(两边加字符)方法
String.prototype.quote = function(qutoestr) {
	if (!qutoestr) {
		qutoestr = "\"";
	}
	return qutoestr + this + qutoestr;
}

测试String类新添加的quote方法
alert("abc".quote()); // "abc"
alert("abc".quote("|"));