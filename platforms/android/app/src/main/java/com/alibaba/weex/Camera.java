// public class CameraModule extends WXModule{
//     public static final int REQUEST_CAMERA = 1;
//     public static final int REQUEST_ALBUM = 2;
//     public static final int REQUEST_CROP = 3;
//     private ImageButton mPictureIb;
//     private File mImageFile;
//     @Override
//     protected void onCreate(Bundle savedInstanceState) {
//         super.onCreate(savedInstanceState);
//         setContentView(R.layout.activity_main);
//         mPictureIb = (ImageButton) findViewById(R.id.ib_picture);
//     }
//     public void onClickPicker(View v) {
//         new AlertDialog.Builder(this)
//                 .setTitle("选择照片")
//                 .setItems(new String[]{"拍照", "相册"}, new OnClickListener() {
//                     @Override
//                     public void onClick(DialogInterface dialogInterface, int i) {
//                         if (i == 0) {
//                             selectCamera();
//                         } else {
//                             selectAlbum();
//                         }
//                     }
//                 })
//                 .create()
//                 .show();
//     }
    
//     private void selectCamera() {
//         createImageFile();
//         if (!mImageFile.exists()) {
//             return;
//         }
//         Intent cameraIntent = new Intent(MediaStore.ACTION_IMAGE_CAPTURE);
//         cameraIntent.putExtra(MediaStore.EXTRA_OUTPUT, Uri.fromFile(mImageFile));
//         startActivityForResult(cameraIntent, REQUEST_CAMERA);
//     }
//     private void selectAlbum() {
//         Intent albumIntent = new Intent(Intent.ACTION_PICK);
//         albumIntent.setData(MediaStore.Images.Media.EXTERNAL_CONTENT_URI);
//         startActivityForResult(albumIntent, REQUEST_ALBUM);
//     }
//     private void cropImage(Uri uri){
//         Intent intent = new Intent("com.android.camera.action.CROP");
//         intent.setDataAndType(uri, IMAGE_UNSPECIFIED);
//         intent.putExtra("crop", "true");
//         intent.putExtra("aspectX", 1);
//         intent.putExtra("aspectY", 1);
//         intent.putExtra(MediaStore.EXTRA_OUTPUT, Uri.fromFile(mImageFile));
//         startActivityForResult(intent, REQUEST_CROP);
//     }
//     private void createImageFile() {
//         mImageFile = new File(Environment.getExternalStorageDirectory(), System.currentTimeMillis() + ".jpg");
//         try {
//             mImageFile.createNewFile();
//         } catch (IOException e) {
//             e.printStackTrace();
//             Toast.makeText(this, "出错啦", Toast.LENGTH_SHORT).show();
//         }
//     }
//     @Override
//     protected void onActivityResult(int requestCode, int resultCode, Intent data) {
//         super.onActivityResult(requestCode, resultCode, data);
//         if (RESULT_OK != resultCode) {
//             return;
//         }
//         switch (requestCode) {
//             case REQUEST_CAMERA:
//                 cropImage(Uri.fromFile(mImageFile));
//                 break;
//             case REQUEST_ALBUM:
//                 createImageFile();
//                 if (!mImageFile.exists()) {
//                     return;
//                 }
//                 Uri uri = data.getData();
//                 if (uri != null) {
//                     cropImage(uri);
//                 }
//                 break;
//             case REQUEST_CROP:
//                 mPictureIb.setImageURI(Uri.fromFile(mImageFile));
//                 break;
//         }
//     }
// }
