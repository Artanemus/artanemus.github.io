Set-Location C:\Users\Ben\Documents\GitHub\artanemus.github.io\images\HeroIcons\


$file = 'SCM_BMAC48x48.png'
$param = 'SCM_Hero_Icon_BMAC.png'
if (Test-Path -Path $file -PathType Leaf) {
    Remove-Item $file #If the file exist, remove it.
}
magick convert $param -flatten -resize 48x48 $file

$file = 'SCM_Chart48x48.png'
$param = 'SCM_Hero_Icon_Chart.png'
if (Test-Path -Path $file -PathType Leaf) {
    Remove-Item $file #If the file exist, remove it.
}
magick convert $param -flatten -resize 48x48 $file

$file = 'SCM_DBUpdate48x48.png'
$param = 'SCM_Hero_Icon_DBUpdate.png'
if (Test-Path -Path $file -PathType Leaf) {
    Remove-Item $file #If the file exist, remove it.
}
magick convert $param -flatten -resize 48x48 $file

$file = 'SCM_Help48x48.png'
$param = 'SCM_Hero_Icon_Help.png'
if (Test-Path -Path $file -PathType Leaf) {
    Remove-Item $file #If the file exist, remove it.
}
magick convert $param -flatten -resize 48x48 $file

$file = 'SCM_LeaderBoard48x48.png'
$param = 'SCM_Hero_Icon_LeaderBoard.png'
if (Test-Path -Path $file -PathType Leaf) {
    Remove-Item $file #If the file exist, remove it.
}
magick convert $param -flatten -resize 48x48 $file

$file = 'SCM_Marshall48x48.png'
$param = 'SCM_Hero_Icon_Marshall.png'
if (Test-Path -Path $file -PathType Leaf) {
    Remove-Item $file #If the file exist, remove it.
}
magick convert $param -flatten -resize 48x48 $file

$file = 'SCM_Member48x48.png'
$param = 'SCM_Hero_Icon_Member.png'
if (Test-Path -Path $file -PathType Leaf) {
    Remove-Item $file #If the file exist, remove it.
}
magick convert $param -flatten -resize 48x48 $file

$file = 'SCM_Nominate48x48.png'
$param = 'SCM_Hero_Icon_Nominate.png'
if (Test-Path -Path $file -PathType Leaf) {
    Remove-Item $file #If the file exist, remove it.
}
magick convert $param -flatten -resize 48x48 $file

$file = 'SCM_Report48x48.png'
$param = 'SCM_Hero_Icon_Report.png'
if (Test-Path -Path $file -PathType Leaf) {
    Remove-Item $file #If the file exist, remove it.
}
magick convert $param -flatten -resize 48x48 $file

$file = 'SCM_TimeKeeper48x48.png'
$param = 'SCM_Hero_Icon_TimeKeeper.png'
if (Test-Path -Path $file -PathType Leaf) {
    Remove-Item $file #If the file exist, remove it.
}
magick convert $param -flatten -resize 48x48 $file

