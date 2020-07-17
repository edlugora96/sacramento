HOST=$1
USER=$2
PASSWD=$3
LOCALPATH='../public/'
FILE='*'
DIR='.'

ftp -n $HOST <<EOF
quote USER $USER
quote PASS $PASSWD
cd $DIR
lcd $LOCALPATH
mput $FILE
quit
exit;
EOF