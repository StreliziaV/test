var bird = {
	flyTimer:null,//小鸟飞翔定时器
	wingTimer:null,//小鸟翅膀摆动定时器
	
	div:document.createElement("div"),
	fallSpeed: 0, //小鸟下落速度
	showBird:function(parentObj) {
		this.div.style.width = "40px";
		this.div.style.height = "28px";
		this.div.style.backgroundImage = "url(img/bird0.png)";
		this.div.style.backgroundRepeat = "no-repeat";
		this.div.style.position = "absolute";
		this.div.style.left = "50px";
		this.div.style.top = "200px";
		this.div.style.zIndex = "1";
		this.div.id = "bird_in_game";
		this.fallSpeed = 0;
		
		parentObj.appendChild(this.div);  //将小鸟DIV插入游戏界面中
	},

	flyBird: function(){ //控制小鸟飞翔下落的函数
		bird.flyTimer = setInterval(fly,40);
		var win_pic = ["url(img/bird0.png)", "url(img/bird1.png)"];
		var win_ind = 0;
		function fly() {
			bird.div.style.top = bird.div.offsetTop + bird.fallSpeed++ + "px";
			if (bird.div.offsetTop < 0) {  
				bird.fallSpeed = 2; //这里用于控制小鸟不要飞出界面
			}
			if (bird.div.offsetTop >= 395) {
				bird.fallSpeed = 0;
				clearInterval(bird.flyTimer); //一旦飞到地面，清除定时器
				clearInterval(bird.wingTimer); //清除翅膀摆动定时器
			}
			if (bird.fallSpeed > 12) {
				bird.fallSpeed = 12;  //鸟的最大下落速度控制在12
			}
		
			if (score >= fly_win_score) {
				bird.fallSpeed = 0
				clearInterval(bird.wingTimer);
				bird.div.style.backgroundImage = win_pic[win_ind];
				bird.div.style.left = bird.div.offsetLeft + 10 + "px";
				win_ind++;
				if (win_ind == 2) win_ind = 0;
				if (bird.div.offsetLeft >= 343) window.clearInterval(bird.flyTimer);
			}
		}
	},
	
	wingWave: function() { //控制小鸟煽动翅膀的函数
		var up = ["url(img/up_bird0.png)", "url(img/up_bird1.png)"];
		var down = ["url(img/down_bird0.png)", "url(img/down_bird1.png)"];
		var i = 0, j = 0;
		bird.wingTimer = setInterval(wing,120);//逐帧动画，小鸟煽动翅膀
		function wing() {
			if (bird.fallSpeed > 0) {
				bird.div.style.backgroundImage = down[i++];
				if (i==2) {i = 0}
			}if (bird.fallSpeed < 0) {
				bird.div.style.backgroundImage = up[j++];
				if (j==2) {j = 0}
			}
		}
	},	

	removeBird() {
		var my_bird = document.getElementById("bird_in_game");
		my_bird.remove();
	}
};
