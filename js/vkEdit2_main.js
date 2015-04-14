/*-------------------------------------------*/
/* エディターの起動
/*		.entry-content 内にdivがなかったら
			// Add Gridボタン表示
/*		div にhover したら
/			// .row が付いていたら
				// col がない場合は 
/*				// 編集モード_1
					

			// .row がなかったら
				// Use Grid ボタンを表示
					// Use Grid ボタンが押されたら
						// .rowを付与＆内側に div.col-md-12 を追加
		// divからmouseout したら
			// 編集なび

/* 編集モード_1
/* 対象のrowに編集バーを表示[ Add row ][ Delete ]
/* [ Add row ]

// col にhover したら
	// 編集モード_2
	// [Edit]が押されたら
	// textareaと[Enter]ボタンを追加
	// colの中身を textarea タグの中に入れる
	// [Enter]ボタンが押されたら中身をHTMLに戻す
	// textareaと[Enter]ボタンを削除



/*-------------------------------------------*/


/*-------------------------------------------*/
/* エディターの起動
/*-------------------------------------------*/


jQuery('.entry-content .row').each(function(i){
	var html_btn_edit = '<span class="vkEdit_btn vkEdit_btn_edit">Edit</span>';
	jQuery(this).mouseenter(function(){
		// colのアクション
		jQuery(this).children().each(function(i){
			if (jQuery(this).hasClass('column')){
				jQuery(this).addClass('vkEdit_edit_hover');
			}
			// var html_btn_edit = '<span class="vkEdit_btn vkEdit_btn_edit"</span>';
			jQuery(this).mouseenter(function(){
				jQuery(this).prepend(html_btn_edit);
			});
		});
	});
});