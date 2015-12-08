
function pl (name, action) {
  document[name].src='images/'+action+'.gif';
}

function off (name) {
  document[name].src='images/'+name+'.gif';
}
function on (name) {
  document[name].src='images/'+name+'_.gif';
}


function offinside (name) {
  document[name].src='../images/'+name+'.gif';
}
function oninside (name) {
  document[name].src='../images/'+name+'_.gif';
}