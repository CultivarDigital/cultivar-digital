yarn generate
cp -rf dist/* ../cultivar-digital-frontend/
cd ../cultivar-digital-frontend/
git add .
git commit -m "Publish"
git push origin main
cd ../cultivar-digital/
echo 'Published!'

