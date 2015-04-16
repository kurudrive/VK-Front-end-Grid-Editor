<?php
/*
 * Plugin Name: VK Front end grid editor
 * Plugin URI:
 * Description:
 * Version:
 * Author: kurudrive @ Vektor,Inc
 * Author URI:
 * Text Domain:
 * Domain Path: languages
 * Network:     false
 * License:     GPL-2.0+
 */

/*-------------------------------------------*/
/* ajax _ jsファイル読み込み
/*-------------------------------------------*/
if (  function_exists( 'vkEdit2_setup' ) ) :
	add_action( 'after_setup_theme', 'vkEdit2_setup' );
endif;

function vkEdit2_setup() {
	add_action('wp_enqueue_scripts','vkEdit2_scripts',5);
}

function vkEdit2_scripts(){
	wp_enqueue_script( 'jquery' );
	wp_enqueue_script('vkEdit2_main_js', plugins_url("js/vkEdit2_main.js", __FILE__) ,array(), '1.0', true);
}

/*-------------------------------------------*/
/* 編集用CSSファイルの読み込み
/*-------------------------------------------*/
function vkEdit2_style_setup(){
    wp_enqueue_style( 'vkEdit2_style_setup_load_admin_css', plugins_url('css/admin_style.css', __FILE__) , false, '2014-05-13');
}
add_action('wp_head', 'vkEdit2_style_setup');

/*-------------------------------------------*/
/* ajax _ URLを取得・設定
/*-------------------------------------------*/
function add_my_ajaxurl() {
?>
    <script>
        var ajaxurl = '<?php echo admin_url( 'admin-ajax.php'); ?>';
    </script>
<?php
}
add_action( 'wp_head', 'add_my_ajaxurl', 1 );

/*-------------------------------------------*/
/* ajax _
/*-------------------------------------------*/
function content_edit() {
?>
<script>
jQuery('#submit').click(function(){
	// phpに投げる変数（変更するポストID）
	<?php global $post; ?>
	var post_id = '<?php echo $post->ID; ?>';
    var post_content = jQuery('.entry-content').html();
    console.log(post_content);
    jQuery.ajax({
        type: 'POST',
        url: ajaxurl,
        data: {
        	// 実行するphp関数
            'action' : 'ajax_post_update',
            'post_id' : post_id,
            'post_content' : post_content,
        },
        success: function( response ){
            jQuery('.entry-content').html(response);
        }
    });
    return false;
});
</script>
<?php
}
add_action( 'wp_footer', 'content_edit', 1 );

/*-------------------------------------------*/
/* ajax _ 実行するPHPの関数 
/*-------------------------------------------*/
function ajax_post_update(){
    // ajaxで受け取る変数（変更するポストID）
    $post_id = $_POST['post_id'];
    $post_content = $_POST['post_content'];

	/* コンテンツの書き換え
	/*-------------------------------------------*/
	$my_post = array();
	$my_post['ID'] = $post_id;
    $my_post['post_content'] = $post_content;
	// データベースの投稿情報を更新
	wp_update_post( $my_post );

    /* フロントにコンテンツを返す
    /*-------------------------------------------*/   
	echo $post_content;
	die();
}
// ログインユーザー用
add_action( 'wp_ajax_ajax_post_update', 'ajax_post_update' );
// 未ログインユーザー用
add_action( 'wp_ajax_nopriv_ajax_post_update', 'ajax_post_update' );
