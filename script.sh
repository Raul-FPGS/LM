echo Que carpeta quieres duplicar?
read carpeta

echo Cuantas carpetas quieres hacer?
read numCarpetas

for i in $(seq 1 $numCarpetas); do
cp -r $carpeta/ $carpeta"$i";
done