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


/*-------------------------------------------*/
// row
/*-------------------------------------------*/
// 行追加編集パネル
var html_rowEditPanel = '<div class="vkEdit_editPanel_row"><span class="vkEdit_btn vkEdit_btn_addRow">Add Row</span><span class="vkEdit_btn vkEdit_btn_delete">Delete row</span></div>';
var html_rowDefaultSet = '<div class="row"><div class="col-md-12 column">&nbsp;</div></div>';


jQuery('.entry-content .row').each(function(i){
	jQuery(this).mouseenter(function(){

		// ホバー状態でない時
		if (!jQuery(this).hasClass('vkEdit_row_hover')) {

			// ホバー識別クラス追加
			jQuery(this).addClass('vkEdit_row_hover');

			// 編集バー表示 
			jQuery(this).append(html_rowEditPanel);
			jQuery(this).prepend(html_rowEditPanel);

			jQuery(this).find('.vkEdit_btn_addRow').click(function(){
				jQuery(this).parent().parent().before(html_rowDefaultSet);
			});

		}
	}); // jQuery(this).mouseenter(function(){
	jQuery(this).mouseleave(function(){
		jQuery(this).removeClass('vkEdit_row_hover');
		jQuery(this).children('.vkEdit_editPanel_row').each(function(){
			jQuery(this).remove();
		});
	}); // jQuery(this).mouseleave(function(){
});


/*-------------------------------------------*/
// カラム
/*-------------------------------------------*/

// function vkColInnerMouseAction(){
jQuery('.entry-content .row .column').each(function(i){
	// アクティブ編集ボタン
	var html_gridEditPanel_btnSet_active = '<div class="vkEdit_btnSet vkEdit_btnSet_active hidden"><span class="vkEdit_btn vkEdit_btn_change">Change</span><span class="vkEdit_btn vkEdit_btn_cancel">Cancel</span></div>';
	// 非アクティブ編集ボタン
	var html_gridEditPanel_btnSet_hover = '<div class="vkEdit_btnSet vkEdit_btnSet_hover"><span class="vkEdit_btn vkEdit_btn_edit">Edit</span></div>';
	// 編集パネルのHTML
	var html_gridEditPanel = '<div class="vkEdit_editPanel_col">'+ html_gridEditPanel_btnSet_hover + html_gridEditPanel_btnSet_active + '</div>';
	// 対象のカラム識別用クラス
	// var column_no = 'column_no_' + i;
	// カラム識別用のクラスとhover識別用クラスを編集に入れる
	var editting_class = 'vkEdit_column_hover';


	/*-------------------------------------------*/
	// カラムにマウスオーバーしたら
	/*-------------------------------------------*/
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
		jQuery(this).children('.vkEdit_column_inner').before( html_gridEditPanel );

		/*-------------------------------------------*/
		// Edit ボタンが押された時の動作
		/*-------------------------------------------*/
		jQuery(this).find('.vkEdit_editPanel_col .vkEdit_btn_edit').click(function(){

			// カラムにアクティブクラスを追加
			jQuery(this).parent().parent().parent().addClass('vkEdit_edit_active');

			// 表示するボタンの切り替え

				// 非表示になっているアクティブ（編集）ボタンセットを表示
				jQuery('.vkEdit_btnSet_active.hidden').removeClass('hidden');
				// 表示しているホバーボタンセットを非表示に
				jQuery('.vkEdit_btnSet_hover').addClass('hidden');

			// テキストエリアの中に編集するhtmlを入れる
			jQuery('.vkEdit_column_inner').wrapInner('<textarea>');


			/*-------------------------------------------*/
			// 編集反映ボタンをクリック
			/*-------------------------------------------*/
			jQuery(this).parent().parent().find('.vkEdit_btn_change').click(function(){

				// カラムからアクティブクラスを削除
				jQuery(this).parent().parent().parent().removeClass('vkEdit_edit_active');

				// 表示するボタンの切り替え

					// 非表示になっているホバーボタンセットを表示
					jQuery('.vkEdit_btnSet_hover.hidden').removeClass('hidden');
					// 表示しているアクティブボタンセットを非表示に
					jQuery('.vkEdit_btnSet_active').addClass('hidden');

				// innerの中のHTMLをテキストエリアの中身に入れかえ
				var select_editingTextArea = jQuery(this).parent().parent().parent().find('textarea');
				var html_after = select_editingTextArea.val();
				// textareaを削除
				select_editingTextArea.before(html_after).remove();
			});

			/*-------------------------------------------*/
			// キャンセルボタンをクリック
			/*-------------------------------------------*/
			jQuery(this).parent().parent().find('.vkEdit_btn_cancel').click(function(){

				// カラムからアクティブクラスを削除
				jQuery(this).parent().parent().parent().removeClass('vkEdit_edit_active');

				// 表示するボタンの切り替え

					// 非表示になっているホバーボタンセットを表示
					jQuery('.vkEdit_btnSet_hover.hidden').removeClass('hidden');
					// 表示しているアクティブボタンセットを非表示に
					jQuery('.vkEdit_btnSet_active').addClass('hidden');

				// innerの中のHTMLをテキストエリアの中身に入れかえ
				var select_editingTextArea = jQuery(this).parent().parent().parent().find('textarea');
				// textareaを削除
				select_editingTextArea.before(html_before).remove();
			});

		}); // Edit ボタンが押された時の動作

	} // if (jQuery(this).hasClass('vkEdit_edit_hover')) {

	});	// カラムにマウスオーバーしたら

	jQuery(this).mouseleave(function(){
	// 	// 編集中ではない場合
		if(!jQuery(this).hasClass('vkEdit_edit_active')){
			var html_column = jQuery(this).children('.vkEdit_column_inner').html();
			jQuery(this).html(html_column);
			// エディットパネルを削除
			jQuery(this).children('.vkEdit_editPanel_col').remove();
			// ホバークラスを削除
			jQuery(this).removeClass(editting_class);
		}
		
	}); //jQuery(this).mouseleave(function(){

});




