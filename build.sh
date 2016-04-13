if [ ! -f client/config.js ]; then
    echo "Missing file client/config.js, need copy from client/config-template.js before build !"
    exit 1
fi
ACTION="build_dev"
if [ "$#" -gt 0 ]; then
    ACTION="$1"
fi
gulp $ACTION
mkdir -p www/jspm_packages/github/driftyco/ionic-bower@1.2.4/fonts/
cp client/config.js www/config.js
cp -r client/meteor www/meteor
cp jspm_packages/github/driftyco/ionic-bower@1.2.4/fonts/ionicons.woff www/jspm_packages/github/driftyco/ionic-bower@1.2.4/fonts/ionicons.woff
cp jspm_packages/github/driftyco/ionic-bower@1.2.4/fonts/ionicons.ttf www/jspm_packages/github/driftyco/ionic-bower@1.2.4/fonts/ionicons.ttf
cp -rf client/images www
#cp templates/index.html www/index.html
if [ "$ACTION" == 'build_dev' ]; then
    cp client/facebookConnectPlugin.js www/facebookConnectPlugin.js
    cp client/fb_sdk.js www/fb_sdk.js
fi
if [ "$ACTION" == 'build' ]; then
    ionic prepare
fi