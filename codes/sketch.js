// 定义视频变量
let vid0, vid1, vid2;
// 状态变量：0代表默认视频，1代表播放视频1(F)，2代表播放视频2(M)
let state = 0; 
let isInitialized = false; // 用于处理浏览器的自动播放限制

function setup() {
  // 创建全屏画布
  createCanvas(windowWidth, windowHeight);

  // 加载视频文件（请确保视频文件与项目在同一目录下，或者替换为正确的路径）
  vid0 = createVideo(['video0.mp4']);
  vid1 = createVideo(['video1.mp4']);
  vid2 = createVideo(['video2.mp4']);

  // 隐藏 p5.js 默认生成的 HTML 视频元素，只在 Canvas 中渲染
  vid0.hide();
  vid1.hide();
  vid2.hide();

  // 为互动视频添加“播放结束”的监听器
  vid1.onended(videoEnded);
  vid2.onended(videoEnded);
  
  // 提示文字排版
  textAlign(CENTER, CENTER);
  textSize(24);
  fill(255);
}

function draw() {
  background(0);
  
  // 浏览器通常限制未交互前自动播放视频，因此我们需要用户先点击一下屏幕
  if (!isInitialized) {
    text("点击屏幕任意位置开始加载默认视频", width / 2, height / 2);
    return;
  }

  // 根据当前状态将对应的视频绘制到全屏画布上
  if (state === 0) {
    image(vid0, 0, 0, width, height);
  } else if (state === 1) {
    image(vid1, 0, 0, width, height);
  } else if (state === 2) {
    image(vid2, 0, 0, width, height);
  }
}

// 监听键盘按压
function keyPressed() {
  // 只有在处于默认状态（0）时，才允许触发新的视频，防止互动视频被打断
  if (state === 0 && isInitialized) {
    if (key === 'f' || key === 'F') {
      state = 1;
      vid0.pause();  // 暂停默认视频
      vid1.time(0);  // 将视频1进度重置为0
      vid1.play();   // 播放视频1
    } else if (key === 'm' || key === 'M') {
      state = 2;
      vid0.pause();  // 暂停默认视频
      vid2.time(0);  // 将视频2进度重置为0
      vid2.play();   // 播放视频2
    }
  }
}

// 视频播放完毕后的回调函数
function videoEnded() {
  // 互动视频播放完毕，重置状态为 0
  state = 0;
  vid1.stop(); 
  vid2.stop();
  
  vid0.loop(); // 重新开始循环播放默认视频
}

// 处理第一次鼠标点击，解除浏览器的自动播放限制
function mousePressed() {
  if (!isInitialized) {
    isInitialized = true;
    vid0.loop(); // 用户点击后，开始循环播放默认视频0
  }
}

// 窗口大小改变时自适应全屏
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}