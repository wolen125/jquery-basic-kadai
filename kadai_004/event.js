// HTMLドキュメントの読み込み完了時（loadイベント）
$(window).on('load', function() {
  console.log('loadイベントが発生しました');
});

// 画面スクロール時（scrollイベント）
$(window).on('scroll', function() {
  console.log('scrollイベントが発生しました');
});
