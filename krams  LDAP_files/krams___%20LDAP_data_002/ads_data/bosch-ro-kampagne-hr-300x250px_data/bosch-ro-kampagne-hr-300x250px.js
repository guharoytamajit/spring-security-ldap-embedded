(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 18,
	color: "#FFFFFF",
	manifest: [
		{src:"images/Image.png", id:"Image"},
		{src:"images/bgimage.jpg", id:"bgimage"},
		{src:"images/logo.png", id:"logo"}
	]
};



// symbols:



(lib.Image = function() {
	this.initialize(img.Image);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,585,585);


(lib.bgimage = function() {
	this.initialize(img.bgimage);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,292,95);


(lib.research = function() {
	this.initialize();

	// Ebene 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape.setTransform(113.6,46.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgKAKIAAgTIAVAAIAAATg");
	this.shape_1.setTransform(108.8,46.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_2.setTransform(104.1,46.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AASAqIAAgyQgBgTgQAAQgHAAgFAHQgGAGAAAJIAAAvIgSAAIAAhRIARAAIAAAMIABABQAJgPAPAAQAdAAAAAcIAAA3g");
	this.shape_3.setTransform(96.9,43.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAPAhQgKAKgRAAQgLAAgIgGQgJgHAAgLQAAgOAKgFQAHgDAPgCIAPgDQAIgCAAgHQAAgLgPAAQgRAAgCANIgSAAQACgbAjAAQAMAAAJAGQALAGAAAMIAAApQAAAFAEAAIAFAAIAAANQgGACgGAAQgMAAgCgKgAADADIgKACQgPACAAALQAAAKARAAQAGABAGgEQAHgEAAgIIAAgNQgEABgHACg");
	this.shape_4.setTransform(87.8,43.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgZAkQgKgIAAgOIASAAQABAOAQAAQATAAgBgLQAAgFgJgEIgQgEQgNgDgFgCQgJgGAAgLQAAgMAMgHQAJgFANAAQAeAAAEAZIgTAAQgDgLgMAAQgPAAAAAJQAAAGAIADIARAEQAaAGAAAQQAAAOgMAHQgKAGgOAAQgPAAgKgHg");
	this.shape_5.setTransform(73.9,43.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgIA5IAAhRIARAAIAABRgAgIgmIAAgSIARAAIAAASg");
	this.shape_6.setTransform(67.5,41.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgZAkQgKgIgBgOIATAAQACAOAPAAQATAAgBgLQAAgFgJgEIgQgEQgMgDgHgCQgHgGgBgLQAAgMAMgHQAKgFAMAAQAfAAADAZIgTAAQgCgLgNAAQgQAAAAAJQAAAGAJADIAQAEQAbAGAAAQQABAOgMAHQgLAGgOAAQgPAAgKgHg");
	this.shape_7.setTransform(56.4,43.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgjAJIAAgyIATAAIAAAwQAAAVAQgBQARAAAAgWIAAguIATAAIAABRIgSAAIAAgMIgBAAQgDAGgGAEQgHAEgFAAQgfAAAAghg");
	this.shape_8.setTransform(47.3,43.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgnA5IAAhvIARAAIAAALIABAAQAGgNARAAQATAAAKANQAKALAAAUQAAAQgJAMQgJANgSAAQgSAAgHgNIgBAAIAAApgAgVgNQAAANAFAGQAHAIAJAAQALAAAGgJQAFgGABgMQAAgMgHgIQgGgJgKAAQgVAAAAAdg");
	this.shape_9.setTransform(37.7,44.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AApAqIAAguQAAgMgCgEQgDgHgKAAQgSAAAAAWIAAAvIgQAAIAAgzQAAgSgPAAQgHAAgFAGQgGAGAAAKIAAAvIgSAAIAAhRIARAAIAAAMIABAAQAKgOAPAAQARAAAFAOQAKgOAQAAQAcAAAAAcIAAA3g");
	this.shape_10.setTransform(25.3,43.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAPAhQgKAKgRAAQgMAAgIgGQgIgHAAgLQAAgOAKgFQAGgDAQgCIAQgDQAHgCAAgHQAAgLgPAAQgRAAgBANIgTAAQACgbAjAAQANAAAIAGQALAGAAAMIAAApQAAAFAFAAIAEAAIAAANQgGACgGAAQgMAAgCgKgAADADIgJACQgPACgBALQAAAKARAAQAFABAHgEQAGgEAAgIIAAgNIgKADg");
	this.shape_11.setTransform(13.8,43.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgbAfQgLgMAAgTQAAgRAKgMQALgNATAAQAPAAAJAHQAMAIABAPIgSAAQgDgQgQAAQgVAAAAAcQgBAMAGAHQAGAJAIAAQARABAEgUIASAAQgGAighAAQgRAAgKgMg");
	this.shape_12.setTransform(4.4,43.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AASA5IAAg0QgBgRgQAAQgHAAgFAHQgGAFAAAIIAAAxIgSAAIAAhwIASAAIAAAqIABAAQAIgNAPAAQANAAAIAHQAIAHAAAMIAAA5g");
	this.shape_13.setTransform(115.4,23.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgbAfQgLgMABgTQgBgRAKgMQAMgNARAAQAQAAAJAHQALAIACAPIgTAAQgDgQgQAAQgVAAAAAcQAAAMAGAHQAGAJAIAAQASABACgUIATAAQgGAighAAQgRAAgKgMg");
	this.shape_14.setTransform(106.1,25.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgXAqIAAhRIARAAIAAAQQACgHAFgFQAHgGAJAAIAHAAIAAASIgIgBQgKAAgGAIQgFAHAAAMIAAAng");
	this.shape_15.setTransform(99,25.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAPAhQgKAKgQAAQgMAAgIgGQgJgHAAgLQAAgOAKgFQAHgDAPgCIAQgDQAHgCAAgHQAAgLgPAAQgRAAgBANIgTAAQACgbAjAAQANAAAJAGQAKAGAAAMIAAApQAAAFAEAAIAFAAIAAANQgFACgHAAQgMAAgCgKgAgHAFQgOACAAALQAAAKAQAAQAGABAGgEQAHgEAAgIIAAgNQgCABgTAEg");
	this.shape_16.setTransform(91,25.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgcAfQgKgMAAgTQAAgQALgNQALgNAQAAQATAAALAPQALAOgCARIg7AAQAAALAFAGQAGAIAJgBQAQAAAEgNIASAAQgDANgLAIQgKAHgOAAQgRAAgLgMgAgOgVQgGAGAAAJIApAAQgBgJgFgGQgGgHgJAAQgHAAgHAHg");
	this.shape_17.setTransform(81.7,25.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgZAkQgKgIgBgOIATAAQACAOAPAAQATAAgBgLQAAgFgJgEIgQgEQgMgDgHgCQgHgGgBgLQAAgMAMgHQAKgFAMAAQAeAAADAZIgSAAQgCgLgNAAQgPAAgBAJQAAAGAJADIAQAEQAbAGAAAQQAAAOgMAHQgKAGgOAAQgPAAgKgHg");
	this.shape_18.setTransform(72.8,25.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgcAfQgKgMAAgTQAAgQALgNQALgNAQAAQATAAALAPQALAOgCARIg7AAQAAALAGAGQAGAIAIgBQAQAAAEgNIASAAQgDANgLAIQgKAHgOAAQgRAAgLgMgAgNgVQgGAGgBAJIApAAQgBgJgFgGQgGgHgJAAQgHAAgGAHg");
	this.shape_19.setTransform(63.9,25.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgXAqIAAhRIARAAIAAAQIABAAQABgHAFgFQAIgGAIAAIAHAAIAAASIgIgBQgKAAgGAIQgEAHAAAMIAAAng");
	this.shape_20.setTransform(56.8,25.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AARA5IAAg0QAAgRgQAAQgHAAgFAHQgGAFAAAIIAAAxIgSAAIAAhwIASAAIAAAqIABAAQAIgNAOAAQAeAAAAAaIAAA5g");
	this.shape_21.setTransform(43.7,23.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgbAfQgLgMAAgTQAAgRAKgMQALgNASAAQAPAAAKAHQALAIACAPIgTAAQgCgQgRAAQgUAAAAAcQAAAMAFAHQAGAJAJAAQAQABADgUIATAAQgGAiggAAQgRAAgLgMg");
	this.shape_22.setTransform(34.4,25.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgZAkQgKgIAAgOIASAAQABAOAQAAQATAAgBgLQAAgFgJgEIgQgEQgMgDgGgCQgJgGAAgLQAAgNAMgGQAJgFANAAQAeAAAEAZIgTAAQgDgLgMAAQgPAAAAAJQAAAGAIADIARAEQAaAGAAAQQAAAOgMAHQgKAGgOAAQgPAAgKgHg");
	this.shape_23.setTransform(25.5,25.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgdAfQgLgMAAgTQAAgSALgMQALgMASAAQATAAALAMQALAMAAASQAAATgLAMQgLAMgTAAQgSAAgLgMgAgQgSQgGAHAAALQAAALAGAIQAGAJAKAAQALAAAHgJQAFgIAAgLQAAgLgFgHQgHgKgLAAQgKAAgGAKg");
	this.shape_24.setTransform(16.2,25.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AguA5IAAhwIA2AAQAiAAAAAcQAAARgRAHIAAABQAWACAAAZQAAAggqAAgAgaApIAiAAQATgBAAgRQAAgSgTAAIgiAAgAgagIIAfAAQAHAAAFgDQAFgFAAgHQAAgQgRAAIgfAAg");
	this.shape_25.setTransform(5.8,23.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAPApIgPg7IAAAAIgOA7IgTAAIgahRIAUAAIAQA8IAAAAIAQg8IAQAAIAPA8IARg8IATAAIgaBRg");
	this.shape_26.setTransform(58.1,7.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgcAfQgKgMAAgTQAAgQALgNQALgNAQAAQATAAALAPQALAOgCARIg7AAQAAALAFAGQAHAIAIgBQAQAAAEgNIASAAQgDANgLAIQgKAHgOAAQgRAAgLgMgAgOgVQgGAGAAAJIApAAQgBgJgFgGQgGgHgJAAQgHAAgHAHg");
	this.shape_27.setTransform(47.2,7.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AASAqIAAgyQgBgTgQAAQgHAAgFAHQgGAGAAAJIAAAvIgSAAIAAhRIARAAIAAAMIABABQAJgPAPAAQANAAAIAHQAIAIAAANIAAA3g");
	this.shape_28.setTransform(37.8,7.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgcAfQgKgMAAgTQAAgQALgNQALgNAQAAQATAAALAPQALAOgCARIg7AAQAAALAGAGQAGAIAIgBQAQAAAFgNIARAAQgDANgLAIQgKAHgOAAQgRAAgLgMgAgNgVQgGAGgBAJIApAAQgBgJgFgGQgGgHgJAAQgHAAgGAHg");
	this.shape_29.setTransform(23.7,7.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AASA5IAAg0QgBgRgPAAQgHAAgGAHQgFAFAAAIIAAAxIgTAAIAAhxIATAAIAAArQAIgNAPAAQAdAAAAAaIAAA5g");
	this.shape_30.setTransform(14.3,5.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgIA5IAAhfIglAAIAAgSIBbAAIAAASIgkAAIAABfg");
	this.shape_31.setTransform(4.6,5.7);

	this.addChild(this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,119,50.5);


(lib.innovation = function() {
	this.initialize();

	// Ebene 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgKAKIAAgTIAVAAIAAATg");
	this.shape.setTransform(81.2,30.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AASAqIAAgyQgBgTgQAAQgHAAgFAHQgGAGABAJIAAAvIgTAAIAAhRIASAAIAAANQAIgPAQAAQAOAAAHAHQAIAIAAANIAAA3g");
	this.shape_1.setTransform(74.1,27.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgdAfQgLgMAAgTQAAgSALgMQALgMASAAQATAAALAMQALAMAAASQAAATgLAMQgLAMgTAAQgSAAgLgMgAgQgTQgGAIAAALQAAALAGAJQAGAIAKABQALgBAHgIQAFgJAAgLQAAgLgFgIQgHgJgLAAQgKAAgGAJg");
	this.shape_2.setTransform(64.4,27.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgHA5IAAhRIAQAAIAABRgAgHgmIAAgSIAQAAIAAASg");
	this.shape_3.setTransform(57.4,25.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgFAwQgEgEAAgLIAAgvIgOAAIAAgOIAOAAIAAgZIAQAAIAAAZIARAAIAAAOIgRAAIAAAqQAAAHACACQABACAGAAIAIAAIAAAOIgMABQgMAAgFgGg");
	this.shape_4.setTransform(52.4,26.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAPAhQgKAKgRAAQgLAAgJgGQgIgGAAgMQAAgOAKgFQAGgDAQgCIAQgDQAHgCAAgHQAAgLgPAAQgSAAAAAOIgTAAQACgcAjAAQANAAAIAFQALAHAAAMIAAApQAAAFAFABIAEAAIAAAMQgGACgGAAQgMAAgCgKgAADADIgJACQgPABgBAMQAAAFAHADQAEACAGABQAFAAAHgEQAGgEAAgIIAAgNIgKADg");
	this.shape_5.setTransform(45.3,27.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgIApIgfhRIAUAAIATA+IABAAIAUg+IATAAIgeBRg");
	this.shape_6.setTransform(36.1,27.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgdAfQgLgMAAgTQAAgSALgMQALgMASAAQATAAALAMQALAMAAASQAAATgLAMQgLAMgTAAQgSAAgLgMgAgQgTQgGAIAAALQAAALAGAJQAGAIAKABQALgBAHgIQAFgJAAgLQAAgLgFgIQgHgJgLAAQgKAAgGAJg");
	this.shape_7.setTransform(26.9,27.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AARAqIAAgyQAAgTgQAAQgHAAgFAHQgGAGAAAJIAAAvIgSAAIAAhRIARAAIAAAMIABABQAJgPAOAAQAeAAAAAcIAAA3g");
	this.shape_8.setTransform(17.3,27.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AARAqIAAgyQABgTgRAAQgGAAgGAHQgFAGgBAJIAAAvIgSAAIAAhRIARAAIAAAMIABABQAJgPAPAAQAdAAAAAcIAAA3g");
	this.shape_9.setTransform(7.8,27.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgIA5IAAhRIAQAAIAABRgAgIgmIAAgSIAQAAIAAASg");
	this.shape_10.setTransform(0.9,25.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgeAtQgJgMgBgTQAAgTAMgMQAKgKAOAAQASAAAIAMIAAAAIAAgqIASAAIAABwIgQAAIAAgLIgBAAQgHAOgQAAQgTAAgLgNgAgQgEQgFAHAAAMQAAAMAFAIQAHAIAJAAQALAAAHgJQAFgIAAgMQAAgOgGgFQgGgIgLAAQgKAAgGAJg");
	this.shape_11.setTransform(104.8,5.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AASAqIAAgyQgBgTgPAAQgIAAgFAHQgGAGABAJIAAAvIgTAAIAAhRIASAAIAAANQAIgPAQAAQAdAAAAAcIAAA3g");
	this.shape_12.setTransform(95.2,7.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAPAhQgKAKgQAAQgMAAgIgGQgJgHAAgLQAAgOAKgFQAHgDAPgCIAPgDQAIgCAAgHQAAgLgPAAQgRAAgBANIgTAAQACgbAjAAQANAAAJAGQAKAGAAAMIAAApQAAAFAEAAIAFAAIAAANQgFACgHAAQgMAAgCgKgAADADIgKACQgPACAAALQAAAFAGADQAFACAGAAQAGABAGgEQAHgEAAgIIAAgNQgEABgHACg");
	this.shape_13.setTransform(86,7.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAQA5IgYgpIgKALIAAAeIgTAAIAAhxIATAAIAAA/IAfgfIAWAAIggAdIAjA0g");
	this.shape_14.setTransform(72.6,5.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgXAqIAAhRIASAAIAAAQQABgHAFgFQAIgGAIAAIAHAAIAAASIgIgBQgJAAgHAIQgEAHAAAMIAAAng");
	this.shape_15.setTransform(65.1,7.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgdAfQgMgMAAgTQAAgSAMgMQALgMASAAQATAAALAMQAMAMAAASQAAATgMAMQgLAMgTAAQgSAAgLgMgAgRgSQgFAHAAALQAAALAFAIQAHAJAKAAQALAAAGgJQAGgIAAgLQAAgLgGgHQgGgKgLAAQgKAAgHAKg");
	this.shape_16.setTransform(56.7,7.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAPApIgPg7IgOA7IgTAAIgZhRIATAAIAQA8IAQg8IAQAAIAPA8IAAAAIARg8IASAAIgZBRg");
	this.shape_17.setTransform(45.4,7.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgXAqIAAhRIASAAIAAAQQABgHAFgFQAIgGAIAAIAHAAIAAASIgIgBQgJAAgHAIQgEAHAAAMIAAAng");
	this.shape_18.setTransform(31.8,7.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgdAfQgLgMAAgTQAAgSALgMQALgMASAAQATAAALAMQALAMAAASQAAATgLAMQgLAMgTAAQgSAAgLgMgAgRgSQgFAHAAALQAAALAFAIQAHAJAKAAQALAAAGgJQAGgIAAgLQAAgLgGgHQgGgKgLAAQgKAAgHAKg");
	this.shape_19.setTransform(23.4,7.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgKA5IAAhEIgNAAIAAgNIANAAIAAgHQAAgZAWAAIAMABIAAAPQgCgBgHAAQgIAAgBAJIAAAIIAQAAIAAANIgQAAIAABEg");
	this.shape_20.setTransform(15.9,5.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgKAKIAAgTIAVAAIAAATg");
	this.shape_21.setTransform(10.8,10.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgKAKIAAgTIAVAAIAAATg");
	this.shape_22.setTransform(6,10.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgKAKIAAgTIAVAAIAAATg");
	this.shape_23.setTransform(1.2,10.3);

	this.addChild(this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,108.9,31.7);


(lib.future = function() {
	this.initialize();

	// Ebene 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgKAKIAAgTIAVAAIAAATg");
	this.shape.setTransform(115.2,46.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AggA4IAAgPIAJABQAGAAADgDQACgCACgGIACgHIgfhQIAUAAIATA8IAVg8IATAAIggBVQgGAPgCAFQgGAIgNAAg");
	this.shape_1.setTransform(108.5,44.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgFAwQgEgEAAgLIAAgvIgOAAIAAgOIAOAAIAAgZIAQAAIAAAZIARAAIAAAOIgRAAIAAAqQAAAGACADQACACAFAAIAIAAIAAAOIgMABQgMAAgFgGg");
	this.shape_2.setTransform(101.3,42.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgIA5IAAhRIARAAIAABRgAgIgmIAAgSIARAAIAAASg");
	this.shape_3.setTransform(96.5,41.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgHA5IAAhxIAQAAIAABxg");
	this.shape_4.setTransform(92.3,41.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAPAhQgKAKgRAAQgMAAgHgGQgJgHAAgLQAAgOAKgFQAHgDAPgCIAPgDQAIgCAAgHQAAgLgPAAQgRAAgCANIgSAAQACgbAjAAQAMAAAJAGQALAGAAAMIAAApQAAAFAEAAIAFAAIAAANQgGACgGAAQgMAAgCgKgAADADIgKACQgPACAAALQAAAKARAAQAGABAGgEQAHgEAAgIIAAgNQgEABgHACg");
	this.shape_5.setTransform(85.8,43.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgcAfQgKgMAAgTQAAgQALgNQALgNAQAAQATAAALAPQALAOgCARIg7AAQAAALAGAGQAGAIAIgBQAQAAAFgNIARAAQgDANgLAIQgKAHgOAAQgRAAgLgMgAgNgVQgGAGgBAJIApAAQgBgJgFgGQgGgHgJAAQgHAAgGAHg");
	this.shape_6.setTransform(76.5,43.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgXAqIAAhRIARAAIAAAQIABAAQABgHAFgFQAIgGAIAAIAHAAIAAASIgIgBQgKAAgGAIQgEAHAAAMIAAAng");
	this.shape_7.setTransform(69.4,43.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgcAfQgKgMAAgTQAAgQALgNQALgNAQAAQATAAAMAPQALAOgDARIg7AAQAAALAGAGQAGAIAIgBQAQAAAFgNIARAAQgDANgLAIQgKAHgOAAQgRAAgLgMgAgNgVQgGAFgBAKIApAAQgBgJgFgGQgGgHgJAAQgHAAgGAHg");
	this.shape_8.setTransform(56.5,43.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AApAqIAAguQAAgMgCgEQgDgHgKAAQgSAAAAAXIAAAuIgQAAIAAgzQAAgSgOAAQgIAAgFAGQgGAGABAKIAAAvIgSAAIAAhRIAQAAIAAAMIABAAQAKgOAPAAQARAAAFAOQAKgOAQAAQAcAAAAAcIAAA3g");
	this.shape_9.setTransform(44.8,43.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgdAfQgLgMAAgTQAAgSALgMQALgMASAAQATAAALAMQALAMAAASQAAATgLAMQgLAMgTAAQgSAAgLgMgAgQgSQgGAHAAALQAAALAGAIQAGAJAKAAQALAAAGgJQAGgIAAgLQAAgLgGgHQgGgKgLAAQgKAAgGAKg");
	this.shape_10.setTransform(32.7,43.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgbAfQgLgMAAgTQAAgRALgMQAKgNASAAQAPAAALAHQALAIAAAPIgSAAQgCgQgRAAQgUAAAAAcQAAAMAFAHQAGAJAJAAQARABACgUIASAAQgEAighAAQgRAAgLgMg");
	this.shape_11.setTransform(23.2,43.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgcAfQgKgMAAgTQAAgQALgNQALgNAQAAQATAAALAPQALAOgCARIg7AAQAAALAFAGQAGAIAJgBQAQAAAEgNIASAAQgDANgLAIQgKAHgOAAQgRAAgLgMgAgOgVQgGAGAAAJIApAAQgBgJgFgGQgGgHgJAAQgHAAgHAHg");
	this.shape_12.setTransform(14.1,43.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgWAsIAAALIgSAAIAAhwIASAAIAAAqIABAAQAIgMAPAAQASAAALANQAJALAAASQABASgKAMQgJANgSAAQgTAAgHgOgAgQgFQgGAGAAANQAAANAGAIQAHAIAJAAQALAAAGgJQAFgIAAgMQAAgMgGgGQgGgJgKAAQgKAAgGAIg");
	this.shape_13.setTransform(4.6,41.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgcAfQgKgMAAgTQAAgRAKgMQAMgNAQAAQATAAALAPQALAOgCARIg7AAQAAALAFAGQAGAIAJgBQAQAAAEgNIASAAQgDANgLAIQgKAHgOAAQgRAAgLgMgAgOgVQgGAFAAAKIAoAAQAAgJgGgGQgGgHgIAAQgIAAgGAHg");
	this.shape_14.setTransform(89,25.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgXAqIAAhRIARAAIAAAQIABAAQABgHAFgFQAIgGAIAAIAHAAIAAASIgIgBQgKAAgGAIQgFAHAAAMIAAAng");
	this.shape_15.setTransform(81.9,25.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgjAJIAAgyIASAAIAAAwQAAAVAQgBQASAAAAgWIAAguIATAAIAABRIgSAAIAAgMIgBAAQgDAGgGAEQgHAEgFAAQgfAAAAghg");
	this.shape_16.setTransform(73.6,25.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgFAwQgEgEAAgLIAAgvIgOAAIAAgOIAOAAIAAgZIAQAAIAAAZIARAAIAAAOIgRAAIAAAqQAAAHACACQABACAGAAIAIAAIAAAOIgMABQgMAAgFgGg");
	this.shape_17.setTransform(65.9,24.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgjAJIAAgyIASAAIAAAwQAAAVAQgBQASAAAAgWIAAguIATAAIAABRIgSAAIAAgMIgBAAQgHAOgOAAQgfAAAAghg");
	this.shape_18.setTransform(58.5,25.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgKA5IAAhDIgNAAIAAgOIANAAIAAgHQAAgZAVABIANAAIAAAPIgIgBQgJAAAAAJIAAAIIAPAAIAAAOIgPAAIAABDg");
	this.shape_19.setTransform(51.1,23.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgcAfQgKgMAAgTQAAgRAKgMQAMgNAQAAQATAAALAPQALAOgCARIg7AAQAAALAFAGQAGAIAJgBQAQAAAEgNIASAAQgDANgLAIQgKAHgOAAQgRAAgLgMgAgOgVQgGAFAAAKIAoAAQAAgJgGgGQgGgHgIAAQgIAAgGAHg");
	this.shape_20.setTransform(39.1,25.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AARA5IAAg0QAAgRgQAAQgHAAgFAHQgGAFAAAIIAAAxIgSAAIAAhwIASAAIAAAqIABAAQAIgNAOAAQAeAAAAAaIAAA5g");
	this.shape_21.setTransform(29.6,23.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgFAwQgEgEAAgLIAAgvIgOAAIAAgOIAOAAIAAgZIAQAAIAAAZIARAAIAAAOIgRAAIAAAqQAAAHACACQABACAGAAIAIAAIAAAOIgMABQgMAAgFgGg");
	this.shape_22.setTransform(21.9,24.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgKA5IAAhDIgNAAIAAgOIANAAIAAgHQAAgZAWABIAMAAIAAAPQgCgBgHAAQgIAAgBAJIAAAIIAQAAIAAAOIgQAAIAABDg");
	this.shape_23.setTransform(11.9,23.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgdAfQgLgMAAgTQAAgSALgMQALgMASAAQATAAALAMQALAMAAASQAAATgLAMQgLAMgTAAQgSAAgLgMgAgQgSQgGAHAAALQAAALAGAIQAGAJAKAAQALAAAHgJQAFgIAAgLQAAgLgFgHQgHgKgLAAQgKAAgGAKg");
	this.shape_24.setTransform(4.2,25.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgYAkQgLgIAAgOIASAAQACAOAPAAQATAAgBgLQAAgFgJgEIgQgEQgagEAAgSQAAgMALgHQAKgFAMAAQAfAAADAZIgTAAQgCgLgNAAQgPAAAAAJQAAAGAIADIARAEQAaAGAAAQQAAAOgMAHQgJAGgPAAQgPAAgJgHg");
	this.shape_25.setTransform(109.7,7.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgFAwQgEgEAAgLIAAgvIgOAAIAAgOIAOAAIAAgZIAQAAIAAAZIARAAIAAAOIgRAAIAAAqQAAAHACACQABACAGAAIAIAAIAAAOIgMABQgMAAgFgGg");
	this.shape_26.setTransform(102.5,6.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgbAfQgKgMAAgTQgBgRAKgMQAMgNARAAQAQAAAJAHQALAIACAPIgSAAQgDgQgRAAQgUAAAAAcQAAAMAEAHQAHAJAIAAQASABADgUIASAAQgGAighAAQgRAAgKgMg");
	this.shape_27.setTransform(95.2,7.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgjAJIAAgyIASAAIAAAwQAAAVAQgBQATAAAAgWIAAguIASAAIAABRIgSAAIAAgMQgEAGgGAEQgHAEgFAAQgfAAAAghg");
	this.shape_28.setTransform(85.8,7.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgeAtQgKgMAAgTQABgTAKgMQALgKAOAAQASAAAIAMIAAgqIASAAIAABwIgRAAIAAgLQgHAOgRAAQgTAAgKgNgAgQgEQgFAHgBAMQABAMAFAIQAHAIAJAAQALAAAHgJQAFgIAAgMQAAgOgGgFQgGgIgLAAQgKAAgGAJg");
	this.shape_29.setTransform(75.8,5.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgdAfQgLgMAAgTQAAgSALgMQALgMASAAQATAAALAMQALAMAAASQAAATgLAMQgLAMgTAAQgSAAgLgMgAgQgSQgGAHAAALQAAALAGAIQAGAJAKAAQALAAAHgJQAFgIAAgLQAAgLgFgHQgHgKgLAAQgKAAgGAKg");
	this.shape_30.setTransform(66,7.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgXAqIAAhRIARAAIAAAQIABAAQABgHAFgFQAIgGAIAAIAHAAIAAASIgIgBQgKAAgGAIQgFAHAAAMIAAAng");
	this.shape_31.setTransform(58.7,7.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgnA5IAAhvIARAAIAAALIAAAAQAHgNARAAQATAAAKANQAJALABAUQAAAQgKAMQgJANgSAAQgRAAgIgNIAAAAIAAApgAgQgiQgGAIAAANQAAANAGAGQAGAIAKAAQALAAAGgJQAFgFAAgNQAAgMgGgIQgHgJgJAAQgKAAgGAIg");
	this.shape_32.setTransform(50.4,8.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgJANQAJgCAAgLIgJAAIAAgWIATAAIAAAWQAAATgTAEg");
	this.shape_33.setTransform(37.9,11.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgcAfQgKgMAAgTQAAgRAKgMQAMgNAQAAQATAAALAPQALAOgCARIg7AAQAAALAFAGQAGAIAJgBQAQAAAEgNIASAAQgDANgLAIQgKAHgOAAQgRAAgLgMgAgOgVQgGAGAAAJIAoAAQAAgJgGgGQgGgHgIAAQgHAAgHAHg");
	this.shape_34.setTransform(31,7.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgXAqIAAhRIARAAIAAAQIABAAQABgHAFgFQAIgGAIAAIAHAAIAAASIgIgBQgKAAgGAIQgFAHAAAMIAAAng");
	this.shape_35.setTransform(23.9,7.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgcAfQgKgMAAgTQAAgQALgNQALgNAQAAQATAAAMAPQALAOgDARIg7AAQAAALAGAGQAGAIAIgBQAQAAAFgNIARAAQgDANgLAIQgKAHgOAAQgRAAgLgMgAgNgVQgGAGgBAJIApAAQgBgJgFgGQgGgHgJAAQgHAAgGAHg");
	this.shape_36.setTransform(15.8,7.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AAaA5IAAg0IgyAAIAAA0IgUAAIAAhxIAUAAIAAAuIAyAAIAAguIAUAAIAABxg");
	this.shape_37.setTransform(5.2,5.7);

	this.addChild(this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,116.4,50.7);


(lib.entirely = function() {
	this.initialize();

	// Ebene 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgKAKIAAgTIAVAAIAAATg");
	this.shape.setTransform(106.6,30.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgKAKIAAgTIAVAAIAAATg");
	this.shape_1.setTransform(101.8,30.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgKAKIAAgTIAVAAIAAATg");
	this.shape_2.setTransform(97.1,30.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgFAwQgEgEAAgLIAAgvIgOAAIAAgOIAOAAIAAgZIAQAAIAAAZIARAAIAAAOIgRAAIAAAqQAAAGACADQACACAFAAIAIAAIAAAOIgMABQgMAAgFgGg");
	this.shape_3.setTransform(91.7,26.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AASAqIAAgyQgBgTgQAAQgHAAgFAHQgGAGAAAJIAAAvIgSAAIAAhRIARAAIAAAMIABABQAJgPAPAAQANAAAIAHQAIAIAAANIAAA3g");
	this.shape_4.setTransform(84.3,27.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgcAfQgKgMAAgTQAAgRALgMQALgNAQAAQATAAAMAPQALAOgDARIg7AAQAAALAGAGQAGAIAIAAQAQAAAFgOIARAAQgDANgLAIQgKAHgOAAQgRAAgLgMgAgNgVQgGAGgBAJIApAAQgBgJgFgGQgGgHgJAAQgHAAgGAHg");
	this.shape_5.setTransform(75,27.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AApAqIAAguQAAgMgCgEQgDgHgKAAQgSAAAAAWIAAAvIgQAAIAAgzQAAgSgOAAQgIAAgFAGQgGAGABAKIAAAvIgSAAIAAhRIAQAAIAAAMIABAAQAKgOAPAAQARAAAFAOQAKgOAQAAQAcAAAAAcIAAA3g");
	this.shape_6.setTransform(63.2,27.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AARAqIAAgyQAAgTgQAAQgHAAgFAHQgGAGAAAJIAAAvIgSAAIAAhRIARAAIAAAMIABABQAJgPAOAAQAeAAAAAcIAAA3g");
	this.shape_7.setTransform(51.3,27.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgdAfQgLgMAAgTQAAgSALgMQALgMASAAQATAAALAMQALAMAAASQAAATgLAMQgLAMgTAAQgSAAgLgMgAgQgTQgGAIAAALQAAALAGAJQAGAIAKABQALgBAGgIQAGgJAAgLQAAgLgGgIQgGgJgLAAQgKAAgGAJg");
	this.shape_8.setTransform(41.7,27.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgXAqIAAhRIASAAIAAAQQABgHAFgFQAIgGAIAAIAHAAIAAASIgIgBQgJAAgHAIQgEAHAAAMIAAAng");
	this.shape_9.setTransform(34.3,27.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgHA5IAAhRIAQAAIAABRgAgHgmIAAgSIAQAAIAAASg");
	this.shape_10.setTransform(28.7,25.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgIApIgfhRIAVAAIATA+IAUg+IASAAIgdBRg");
	this.shape_11.setTransform(22.3,27.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AARAqIAAgyQAAgTgQAAQgGAAgGAHQgFAGgBAJIAAAvIgSAAIAAhRIARAAIAAAMIABABQAIgPAPAAQAeAAAAAcIAAA3g");
	this.shape_12.setTransform(13.3,27.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgcAfQgKgMAAgTQAAgRALgMQALgNAQAAQATAAALAPQALAOgCARIg7AAQAAALAFAGQAHAIAIAAQAQAAAEgOIASAAQgDANgLAIQgKAHgOAAQgRAAgLgMgAgOgVQgGAGAAAJIApAAQgBgJgFgGQgGgHgJAAQgHAAgHAHg");
	this.shape_13.setTransform(4,27.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAPApIgPg7IAAAAIgOA7IgTAAIgahRIAUAAIAQA8IAAAAIAQg8IAQAAIAPA8IAAAAIARg8IATAAIgaBRg");
	this.shape_14.setTransform(100,7.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgcAfQgKgMAAgTQAAgRAKgMQAMgNAQAAQATAAALAPQALAOgCARIg7AAQAAALAFAGQAGAIAJgBQAQAAAEgNIASAAQgDANgLAIQgKAHgOAAQgRAAgLgMgAgOgVQgGAFAAAKIAoAAQAAgJgGgGQgGgHgIAAQgIAAgGAHg");
	this.shape_15.setTransform(89.1,7.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AASAqIAAgyQgBgTgQAAQgHAAgFAHQgGAGAAAJIAAAvIgSAAIAAhRIARAAIAAAMIABABQAJgPAOAAQAeAAAAAcIAAA3g");
	this.shape_16.setTransform(79.6,7.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AggA4IAAgPIAJABQAGAAADgDQACgCACgGIACgHIgfhQIAUAAIATA8IAVg8IATAAIggBVQgGAPgCAFQgGAIgNAAg");
	this.shape_17.setTransform(65.8,8.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgIA5IAAhxIARAAIAABxg");
	this.shape_18.setTransform(59.4,5.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgcAfQgKgMAAgTQAAgQALgNQALgNAQAAQATAAALAPQALAOgCARIg7AAQAAALAFAGQAHAIAIgBQAQAAAEgNIASAAQgDANgLAIQgKAHgOAAQgRAAgLgMgAgOgVQgGAGAAAJIApAAQgBgJgFgGQgGgHgJAAQgHAAgHAHg");
	this.shape_19.setTransform(52.8,7.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgXAqIAAhRIARAAIAAAQIABAAQABgHAFgFQAIgGAIAAIAHAAIAAASIgIgBQgKAAgGAIQgFAHAAAMIAAAng");
	this.shape_20.setTransform(45.7,7.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgIA5IAAhRIARAAIAABRgAgIgmIAAgSIARAAIAAASg");
	this.shape_21.setTransform(40,5.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgFAwQgEgEAAgLIAAgvIgOAAIAAgOIAOAAIAAgZIAQAAIAAAZIARAAIAAAOIgRAAIAAAqQAAAHACACQABACAGAAIAIAAIAAAOIgMABQgMAAgFgGg");
	this.shape_22.setTransform(35,6.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AARAqIAAgyQABgTgRAAQgGAAgGAHQgFAGgBAJIAAAvIgSAAIAAhRIARAAIAAAMIABABQAIgPAQAAQAdAAAAAcIAAA3g");
	this.shape_23.setTransform(27.6,7.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgcAfQgKgMAAgTQAAgQALgNQALgNAQAAQATAAALAPQALAOgCARIg7AAQAAALAGAGQAGAIAIgBQAQAAAEgNIASAAQgDANgLAIQgKAHgOAAQgRAAgLgMgAgNgVQgGAGgBAJIApAAQgBgJgFgGQgGgHgJAAQgHAAgGAHg");
	this.shape_24.setTransform(18.3,7.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgKAKIAAgTIAVAAIAAATg");
	this.shape_25.setTransform(11.2,10.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgKAKIAAgTIAVAAIAAATg");
	this.shape_26.setTransform(6.4,10.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgKAKIAAgTIAVAAIAAATg");
	this.shape_27.setTransform(1.7,10.3);

	this.addChild(this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,107.7,31.7);


(lib.connecting = function() {
	this.initialize();

	// Ebene 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgeAvQgRgJAAgUIAdAAQAAAQAUAAQATABgBgLQAAgHgegIQgigHAAgVQAAgOAJgKQALgMAYABQAqgBADAkIgbAAQgDgOgPgBQgQAAAAALQAAAFAgAJQAgAHABAVQAAAUgRAKQgNAHgRgBQgTAAgNgIg");
	this.shape.setTransform(44.7,33.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgmAxQgKgJAAgPQAAgcAegFIAYgDQAJgCAAgGQAAgNgQAAQgOAAgDAPIgbAAQACgXAPgIQAKgGASAAQARAAAKAFQAQAIAAARIAAA4QAAAOAHADIAAAEIgfAAIgDgNQgGAHgGADQgHAGgNgBQgNAAgJgGgAgCAHQgJACgDACQgHAEABAIQAAAGAEAEQADADAFgBQAJAAAGgFQAJgGgBgJIAAgOQgEAEgNACg");
	this.shape_1.setTransform(33.6,33.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgxAAQAAgTAIgOQANgVAcAAQAUgBANALQARAPAAAfIAAAFIhHAAQACAaAVAAQAOAAAEgLIAdAAQgFARgPAJQgMAIgPgBQgzAAAAg3gAgUgJIApAAQgCgWgTgBQgSABgCAWg");
	this.shape_2.setTransform(22.5,33.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgnA3QgLgPAAgYQAAgZANgPQAMgNATAAQARAAAMAQIAAgzIAcAAIAACOIgbAAIAAgNIAAAAQgKAQgUAAQgVAAgMgSgAgVASQAAAMAEAIQAHAMAKAAQAMAAAHgKQAFgIABgNQgBgggYAAQgVAAAAAfg");
	this.shape_3.setTransform(10.6,31.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgMBIIAAhoIAaAAIAABogAgMgtIAAgaIAaAAIAAAag");
	this.shape_4.setTransform(1.9,31.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AggBEQgPgIgBgQIAfAAQACALAQAAQAWAAAAgZIAAgNIgBAAQgIAQgSAAQgUAAgMgNQgOgPAAgZQAAgaAOgPQALgOAUAAQAUAAAIATIABAAIAAgQIAbAAIAABjQAAAVgHAKQgMASghAAQgTAAgMgIgAgOgsQgHAJAAARQAAAMAFAGQAGAJAKAAQAXAAAAgcQAAgOgGgJQgGgJgLAAQgIAAgGAHg");
	this.shape_5.setTransform(102.9,11.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AATA2IAAg+QAAgKgBgEQgEgIgNAAQgHAAgGAHQgHAGABAMIAAA7IgcAAIAAhoIAbAAIAAAQQALgTASAAQARAAAKAJQAKAJAAASIAABHg");
	this.shape_6.setTransform(90.8,9.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgNBIIAAhoIAbAAIAABogAgNgtIAAgaIAbAAIAAAag");
	this.shape_7.setTransform(81.9,7.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgJA9QgFgFAAgLIAAg/IgOAAIAAgUIAOAAIAAgdIAaAAIAAAdIARAAIAAAUIgRAAIAAA4QAAAFABABQADACAIAAIAFAAIAAAVIgQABQgPAAgHgHg");
	this.shape_8.setTransform(75.7,8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgmAmQgKgOAAgVQAAgZANgQQANgRAXAAQARABAMAHQARALABAXIgcAAQgDgSgOAAIgCAAQgJAAgHAKQgEAJAAAMQAAAgAUAAQAJAAAGgHQAEgGAAgFIAcAAQgBAOgJALQgNARgZAAQgZAAgNgSg");
	this.shape_9.setTransform(67,9.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgxgBQAAgRAIgOQANgXAcAAQAUABANAKQARAQAAAeIAAAFIhHAAQACALACAFQAHAKAMAAQAPAAADgLIAdAAQgFARgOAJQgNAIgPAAQgzAAAAg5gAgUgJIApAAQgCgXgTABQgRgBgDAXg");
	this.shape_10.setTransform(55.8,9.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAUA2IAAg+QAAgWgTAAQgHAAgGAHQgHAGAAAMIAAA7IgcAAIAAhoIAbAAIAAAQIABAAQAKgTAUAAQAQAAAKAJQALAJAAASIAABHg");
	this.shape_11.setTransform(44.1,9.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAUA2IAAg+QAAgKgDgEQgDgIgMAAQgIAAgGAHQgGAGgBAMIAAA7IgcAAIAAhoIAbAAIAAAQQAMgTATAAQAQAAAKAJQALAJAAASIAABHg");
	this.shape_12.setTransform(31.9,9.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgkAqQgRgPAAgbQAAgaARgPQAOgOAWAAQAXAAAOAOQARAPAAAaQAAAbgRAPQgOAOgXAAQgWAAgOgOgAgYAAQAAAgAYAAQAZAAAAggQAAgfgZAAQgYAAAAAfg");
	this.shape_13.setTransform(19.7,9.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgsA4QgTgUAAgkQABgiASgVQASgTAbAAQAeAAARARQAOAPABASIgdAAQgGgYgaAAQgMAAgJAKQgNANAAAZQABAWAHANQAKAOAQAAQAaAAAGgbIAdAAQgEAZgPANQgRAPgaAAQgbAAgSgTg");
	this.shape_14.setTransform(6.4,7.6);

	this.addChild(this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,108,39);


(lib.bgbutton = function() {
	this.initialize();

	// Ebene 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#215F8B").s().p("AoSEBQggAAAAgxIAAmgQAAgwAgAAIRFAAIAAIBg");
	this.shape.setTransform(56.3,25.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#184A6E").s().p("AipEBIAAoBIE0AAQAfAAAAAwIAAGgQAAAxgfAAg");
	this.shape_1.setTransform(129.7,25.8);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,146.8,51.6);


(lib.button = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgbAMIALAAQABAMAPAAQAQAAAAgJQAAgGgHgDIgNgEQgKgCgEgBQgHgFAAgJQAAgJAIgFQAHgEAKAAQAXAAACAUIgLAAQgBgLgNAAQgOAAAAAJQAAAFAHADIANADQAKADAFABQAHAFAAAIQAAALgJAGQgIAEgLAAQgaAAgBgWg");
	this.shape.setTransform(89.1,35.7,1.088,1.088);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AARAiIAAgrQAAgOgOAAQgSAAAAAVIAAAkIgLAAIAAhBIAKAAIAAAKIABAAQAGgMAOAAQAWABAAAYIAAAqg");
	this.shape_1.setTransform(81.1,35.6,1.088,1.088);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgWAYQgJgKAAgOQAAgOAJgJQAIgKAOAAQAPAAAJAKQAIAJAAAOQAAAPgIAJQgJAKgPAAQgNAAgJgKgAgNgRQgGAHAAAKQAAALAGAHQAGAGAHAAQAJAAAFgGQAGgHAAgLQAAgKgGgHQgFgHgJAAQgHAAgGAHg");
	this.shape_2.setTransform(72.6,35.7,1.088,1.088);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgEAuIAAhBIAJAAIAABBgAgEgfIAAgOIAJAAIAAAOg");
	this.shape_3.setTransform(66.5,34.3,1.088,1.088);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAJArQgJAAgBgDQgEgDAAgJIAAgoIgLAAIAAgKIALAAIAAgUIAJAAIAAAUIANAAIAAAKIgNAAIAAAnQAAAEABABQACABAFAAIAFAAIAAAKg");
	this.shape_4.setTransform(62.1,34.6,1.088,1.088);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAOAYQgKAKgMAAQgVAAAAgTQgBgKAIgFQAEgBALgCIANgDQAHgCAAgFQAAgLgNAAQgPAAgBANIgLAAQABgWAaAAQAYAAAAASIAAAgQAAAHADAAIAEAAIAAAIQgEACgEAAQgJAAAAgKgAAFABIgKACQgNADAAAJQAAAJAMAAQAIAAAGgFQAFgEAAgGIAAgJQgDAAgFABg");
	this.shape_5.setTransform(55.9,35.7,1.088,1.088);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgEAhIgZhBIANAAIAQA1IATg1IALAAIgYBBg");
	this.shape_6.setTransform(47.9,35.7,1.088,1.088);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgXAYQgIgJAAgPQAAgOAIgJQAJgKAOAAQAPAAAJAKQAIAJAAAOQAAAPgIAJQgJAKgPAAQgOAAgJgKgAgNgRQgGAHAAAKQAAALAGAHQAGAGAHAAQAIAAAGgGQAGgHAAgLQAAgKgGgHQgGgHgIAAQgHAAgGAHg");
	this.shape_7.setTransform(39.8,35.7,1.088,1.088);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAQAiIAAgrQAAgOgNAAQgIAAgFAGQgFAGAAAJIAAAkIgLAAIAAhBIAKAAIAAAKQAHgMANAAQAXABAAAYIAAAqg");
	this.shape_8.setTransform(31.4,35.6,1.088,1.088);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAQAiIAAgrQAAgOgNAAQgSAAAAAVIAAAkIgLAAIAAhBIAKAAIAAAKIAAAAQAHgMANAAQAXABAAAYIAAAqg");
	this.shape_9.setTransform(23,35.6,1.088,1.088);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgEAuIAAhBIAJAAIAABBgAgEgfIAAgOIAJAAIAAAOg");
	this.shape_10.setTransform(17,34.3,1.088,1.088);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgVAYQgIgJAAgPQAAgOAJgJQAIgKAMAAQAQAAAIANQAHAKgBANIgwAAQAAAJAFAGQAFAHAJAAQAOAAADgNIALAAQgFAWgYAAQgNAAgIgKgAgMgSQgFAFgBAIIAkAAQAAgIgFgFQgGgGgHAAQgHAAgFAGg");
	this.shape_11.setTransform(62.6,17.7,1.088,1.088);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgQAiIAAhBIAKAAIAAAOQAHgQAQABIAAALQgWAAAAAZIAAAeg");
	this.shape_12.setTransform(56.2,17.6,1.088,1.088);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgXAYQgIgJAAgPQAAgOAIgJQAJgKAOAAQAPAAAJAKQAIAJAAAOQAAAPgIAJQgJAKgPAAQgOAAgJgKgAgNgRQgGAHAAAKQAAALAGAHQAGAHAHAAQAIAAAGgHQAGgHAAgLQAAgKgGgHQgGgHgIAAQgHAAgGAHg");
	this.shape_13.setTransform(48.9,17.7,1.088,1.088);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgEAtIAAhZIAJAAIAABZg");
	this.shape_14.setTransform(42.8,16.3,1.088,1.088);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgeAuIAAhaIALAAIAAAJQAGgKANAAQAPAAAJAKQAHAKAAAPQAAANgHAJQgJAKgPAAQgMAAgHgKIAAAigAgPgcQgEAHAAALQAAAKAEAFQAGAIAJAAQAUAAgBgYQAAgKgEgHQgGgIgJAAQgKAAgFAIg");
	this.shape_15.setTransform(36.7,19,1.088,1.088);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AARAhIgRgcIgRAcIgOAAIAZghIgXggIAOAAIAPAYIAQgYIAMAAIgWAfIAaAig");
	this.shape_16.setTransform(28.2,17.7,1.088,1.088);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgfAtIAAhZIA+AAIAAAKIgyAAIAAAdIAvAAIAAAIIgvAAIAAAgIAyAAIAAAKg");
	this.shape_17.setTransform(20,16.3,1.088,1.088);

	// Ebene 1
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgEA+IAig+Igig9IATAAIArA9IgrA+gAg5A+IAkg+Igkg9IAVAAIApA9IgpA+g");
	this.shape_18.setTransform(129.5,25.8);

	this.instance = new lib.bgbutton();
	this.instance.setTransform(73.4,25.8,1,1,0,0,0,73.4,25.8);

	this.addChild(this.instance,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,146.8,51.6);


// stage content:
(lib.boschrokampagnehr300x250px = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_491 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(491).call(this.frame_491).wait(23));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#DCDCDC").ss(0.5,2,0,1).p("AsWEtIAAguAsWD6IAAomAsIksIYfAA");
	this.shape.setTransform(79.3,30.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(514));

	// logo
	this.instance = new lib.logo();
	this.instance.setTransform(15.2,10.4,0.44,0.44);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AsYEvIAApdIYxAAIAAJdg");
	this.shape_1.setTransform(79.4,30.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.instance}]}).to({state:[{t:this.shape_1},{t:this.instance}]},257).wait(257));

	// connecting
	this.instance_1 = new lib.connecting();
	this.instance_1.setTransform(66,91.3,0.356,0.356,0,0,0,54,19.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).to({scaleX:1.06,scaleY:1.06,alpha:1},4).to({scaleX:1,scaleY:1},2).wait(236).to({scaleX:1.58,scaleY:1.58,alpha:0},5).to({_off:true},6).wait(4).to({_off:false,scaleX:0.36,scaleY:0.36},0).to({scaleX:1.06,scaleY:1.06,alpha:1},4).to({scaleX:1,scaleY:1},2).wait(236).to({scaleX:1.58,scaleY:1.58,alpha:0},5).wait(6));

	// research
	this.instance_2 = new lib.research();
	this.instance_2.setTransform(71.5,149.7,0.269,0.269,0,0,0,59.4,25.3);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(18).to({_off:false},0).to({regX:59.5,scaleX:1.07,scaleY:1.07,alpha:1},4).to({scaleX:1,scaleY:1},2).wait(36).to({scaleX:1.75,scaleY:1.75,y:149.8,alpha:0},5).to({_off:true},192).wait(18).to({_off:false,regX:59.4,scaleX:0.27,scaleY:0.27,y:149.7},0).to({regX:59.5,scaleX:1.07,scaleY:1.07,alpha:1},4).to({scaleX:1,scaleY:1},2).wait(36).to({scaleX:1.75,scaleY:1.75,y:149.8,alpha:0},5).wait(192));

	// entirely
	this.instance_3 = new lib.entirely();
	this.instance_3.setTransform(66.9,150.2,0.323,0.323,0,0,0,53.9,15.8);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(65).to({_off:false},0).to({regX:53.8,scaleX:1.1,scaleY:1.1,alpha:1},5).to({regX:53.9,scaleX:1,scaleY:1,x:67},2).wait(36).to({regX:53.8,scaleX:1.54,scaleY:1.54,x:66.9,alpha:0},5).to({_off:true},144).wait(65).to({_off:false,regX:53.9,scaleX:0.32,scaleY:0.32},0).to({regX:53.8,scaleX:1.1,scaleY:1.1,alpha:1},5).to({regX:53.9,scaleX:1,scaleY:1,x:67},2).wait(36).to({regX:53.8,scaleX:1.54,scaleY:1.54,x:66.9,alpha:0},5).wait(144));

	// innovation
	this.instance_4 = new lib.innovation();
	this.instance_4.setTransform(67.5,150.2,0.427,0.427,0,0,0,54.4,15.8);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(113).to({_off:false},0).to({scaleX:1.16,scaleY:1.16,alpha:1},6).to({scaleX:1,scaleY:1},2).wait(36).to({scaleX:1.52,scaleY:1.52,alpha:0},5).to({_off:true},95).wait(113).to({_off:false,scaleX:0.43,scaleY:0.43},0).to({scaleX:1.16,scaleY:1.16,alpha:1},6).to({scaleX:1,scaleY:1},2).wait(36).to({scaleX:1.52,scaleY:1.52,alpha:0},5).wait(95));

	// future
	this.instance_5 = new lib.future();
	this.instance_5.setTransform(69.6,149.5,0.402,0.402,0,0,0,58.1,25.4);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(162).to({_off:false},0).to({scaleX:1.1,scaleY:1.1,y:149.6,alpha:1},5).to({scaleX:1,scaleY:1},2).wait(77).to({scaleX:1.51,scaleY:1.51,alpha:0},5).to({_off:true},6).wait(162).to({_off:false,scaleX:0.4,scaleY:0.4,y:149.5},0).to({scaleX:1.1,scaleY:1.1,y:149.6,alpha:1},5).to({scaleX:1,scaleY:1},2).wait(77).to({scaleX:1.51,scaleY:1.51,alpha:0},5).wait(6));

	// button
	this.instance_6 = new lib.button();
	this.instance_6.setTransform(84.9,213.6,1,1,0,0,0,73.4,25.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(206).to({scaleX:1.08,scaleY:1.08,y:213.5},5).to({scaleX:1,scaleY:1,y:213.6},5).wait(3).to({scaleX:1.08,scaleY:1.08,y:213.5},5).to({scaleX:1,scaleY:1,y:213.6},5).wait(234).to({scaleX:1.08,scaleY:1.08,y:213.5},5).to({scaleX:1,scaleY:1,y:213.6},5).wait(3).to({scaleX:1.08,scaleY:1.08,y:213.5},5).to({scaleX:1,scaleY:1,y:213.6},5).wait(28));

	// bg-img
	this.instance_7 = new lib.bgimage();

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(514));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(149.2,124.2,300.8,250.8);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;