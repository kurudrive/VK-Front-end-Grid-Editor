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
/*-------------------------------------------*/
/*	vkColInner mouse action
/*-------------------------------------------*/
// setTimeout(function(){
// 	vkColInnerMouseAction();
// },500);

// function vkColInnerMouseAction(){
jQuery('.entry-content .row .column').each(function(i){
	// 編集パネルのHTML
	var html_gridEditPanel_hover = '<div class="vkEdit_editPanel"><span class="vkEdit_btn vkEdit_btn_edit">Edit</span><span class="vkEdit_btn vkEdit_btn_change">Change</span><span class="vkEdit_btn vkEdit_btn_cancel">Cancel</span></div>';
	// 対象のカラム識別用クラス
	// var column_no = 'column_no_' + i;
	// カラム識別用のクラスとhover識別用クラスを編集に入れる
	var editting_class = 'vkEdit_column_hover';


	// カラムにマウスオーバーしたら
	jQuery(this).mouseenter(function(){
	// カラムが既にホバー状態じゃない時
	if (!jQuery(this).hasClass('vkEdit_column_hover')) {
		// カラムにホバー識別クラス追加
		jQuery(this).addClass(editting_class);
		// カラム内のHTMLを格納
		var html_before = jQuery(this).html();
		// columnの中をhtml改変用のdivで囲う

		jQuery(this).wrapInner('<div class="vkEdit_column_inner">');
		// row内、Add hover panel
		jQuery(this).children('.vkEdit_column_inner').before( html_gridEditPanel_hover );

		// When click edit action
		jQuery(this).find('.vkEdit_editPanel .vkEdit_btn_edit').click(function(){

			// カラムにアクティブクラスを追加
			jQuery('.vkEdit_colmun_hover').addClass('vkEdit_edit_active');

			// テキストエリアの中に編集するhtmlを入れる
			jQuery('.vkEdit_column_inner').wrapInner('<textarea>');

			// 編集反映ボタンをクリック
			jQuery(this).parent().parent().find('.vkEdit_btn_change').click(function(){
				console.log('_|＼○_ﾋｬｯ ε=＼＿○ﾉ ﾎｰｳ!!_|＼○_ﾋｬｯ ε=＼＿○ﾉ ﾎｰｳ!!');
			// 	// changeクラスを外してeditクラスに変更。テキストｍEditに戻す
			// 	// jQuery(this).removeClass('vkEdit_btn_change').addClass('vkEdit_btn_edit').text('Edit');
			// 	// innerの中のHTMLをテキストエリアの中身に入れかえ
				var select_editingTextArea = jQuery(this).parent().parent().find('textarea');
				var html_after = select_editingTextArea.html();
				select_editingTextArea.before(html_after).remove();
			});


		});


	} // if (jQuery(this).hasClass('vkEdit_edit_hover')) {
	});

	// jQuery(this).mouseleave(function(){
	// 	// 編集中ではない場合
	// 	if(!jQuery(this).hasClass('vkEdit_edit_active')){
	// 		// jQuery(this).unwrapInner('<div class="vkEdit_column_inner">');
	// 		// remove hover class
	// 		jQuery(this).children('.vkEdit_editPanel').remove();
	// 		// jQuery(this).children('.vkEdit_column_inner').unwrap();
	// 		// jQuery(this).children('textarea').unwrap();
	// 		// Delete hover class
	// 		if(jQuery(this).hasClass('vkEdit_edit_hover')){
	// 			jQuery(this).removeClass(editting_class);
	// 		}
	// 	}


		
	// });




});
// }




		// // 編集反映ボタンをクリック
		// jQuery('.vkEdit_btn_change').click(function(){
		// 	console.log('_|＼○_ﾋｬｯ ε=＼＿○ﾉ ﾎｰｳ!!');
		// 	// changeクラスを外してeditクラスに変更。テキストｍEditに戻す
		// 	// jQuery(this).removeClass('vkEdit_btn_change').addClass('vkEdit_btn_edit').text('Edit');
		// 	// var html_after = jQuery('.vkEdit_column_inner textarea').html();
		// 	// innerの中のHTMLをテキストエリアの中身に入れかえ
		// 	// jQuery('.vkEdit_column_inner').unwrapInner('textarea');
		// });



