window.addEventListener('DOMContentLoaded',
  function(){

    let dom_textarea = document.querySelector('#comment');

    dom_textarea.addEventListener('keyup',function(){
      let leng = this.value.length;
      let dom_count = document.querySelector('#js-comment-length');

      dom_count.innerText = leng;

      switch(true){
        default: dom_count.style.color = '#eee'; break;
        case leng > 100: dom_count.style.color = '#e28'; break;
        case leng > 80: dom_count.style.color = '#ec4'; break;
      }
    });

  },false
);
