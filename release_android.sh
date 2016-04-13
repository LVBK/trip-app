rm ./build/*
ionic build android --release
echo "Build for armv7"
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore ./keys/sokujob-blueagency0901.keystore ./platforms/android/build/outputs/apk/android-armv7-release-unsigned.apk sokujob
jarsigner -verify -verbose -certs ./platforms/android/build/outputs/apk/android-armv7-release-unsigned.apk
mkdir -p ./build/
zipalign -v 4 ./platforms/android/build/outputs/apk/android-armv7-release-unsigned.apk ./build/Sokujob.apk
echo "Build for x86"
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore ./keys/sokujob-blueagency0901.keystore ./platforms/android/build/outputs/apk/android-x86-release-unsigned.apk sokujob
jarsigner -verify -verbose -certs ./platforms/android/build/outputs/apk/android-x86-release-unsigned.apk
mkdir -p ./build/
zipalign -v 4 ./platforms/android/build/outputs/apk/android-x86-release-unsigned.apk ./build/Sokujob_x86.apk
