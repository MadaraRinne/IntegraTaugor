document.getElementById('video-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o recarregamento da página
  
    var videoUrl = document.getElementById('video-url').value;
    var videoId = extractVideoId(videoUrl);
  
    if (videoId) {
      var iframe = createVideoIframe(videoId);
      var videoItem = createVideoItem(iframe);
      document.getElementById('video-container').appendChild(videoItem);
      document.getElementById('video-url').value = '';
    }
  });
  
  document.getElementById('video-container').addEventListener('click', function(event) {
    if (event.target.classList.contains('remove-video')) {
      var videoItem = event.target.closest('.video-item');
      videoItem.remove();
    }
  });
  
  function extractVideoId(url) {
    var videoId = '';
    var regex = /[?&]v=([^&#]*)/i;
    var match = regex.exec(url);
    if (match) {
      videoId = match[1];
    }
    return videoId;
  }
  
  function createVideoIframe(videoId) {
    var iframe = document.createElement('iframe');
    iframe.setAttribute('src', 'https://www.youtube.com/embed/' + videoId);
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allowfullscreen', 'true');
    return iframe;
  }
  
  function createVideoItem(iframe) {
    var videoItem = document.createElement('div');
    videoItem.classList.add('video-item');
    videoItem.appendChild(iframe);
    
    var removeButton = document.createElement('button');
    removeButton.classList.add('remove-video');
    removeButton.textContent = 'Remover';
    videoItem.appendChild(removeButton);
  
    return videoItem;
  }
  