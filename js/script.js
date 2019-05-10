window.addEventListener('DOMContentLoaded',
  function(){

    let dom_textarea = document.querySelector('#comment');
    let dom_name = document.querySelector('#name');

    let dom_jsName = document.querySelector('#js-name');
    let dom_jsComment = document.querySelector('#js-comment');
    let dom_jsWho =document.querySelector('js-who');

    //コメント文字数チェックと可否判定

    dom_textarea.addEventListener('keyup',function(){
      let leng = this.value.length;
      let dom_count = document.querySelector('#js-comment-length');

      dom_count.textContent = leng;

      switch(true){
        default: dom_count.style.color = '#eee'; break;
        case leng > 100: dom_count.style.color = '#e28'; break;
        case leng > 80: dom_count.style.color = '#ec4'; break;
      }

      empty_check(dom_jsComment, dom_textarea);
    });


//バリデーション関連=========================================================================
    dom_name.addEventListener('keyup',function(){
      empty_check(dom_jsName, dom_name);
    });

    dom_jsWho.addEventListener('keyup',function(){

    });


//=========================================================================
    function empty_check(dom,linkDom){
      const MSG_OK = 'OK!';
      const MSG_NG_EMPTY = '必須項目ですよ！';
      //const MSG_NG_LENGTH_OVER = '文字数あふれちゃってますよ！';

      if(linkDom.value.length > 0){
        valid_ok(dom);
        dom.textContent= MSG_OK;

      }else{
        valid_ng(dom);
        dom.textContent = MSG_NG_EMPTY;
      };
    }
//=========================================================================
    function valid_ok(e){
      e.classList.remove('js-check-none');
      e.classList.remove('js-check-ng');
      e.classList.add('js-check-ok');
    }

    function valid_ng(e){
      e.classList.remove('js-check-none');
      e.classList.remove('js-check-ok');
      e.classList.add('js-check-ng');
    }
//=========================================================================

  },false
);
