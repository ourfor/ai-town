import * as CONFIG from './levelconfig.js' 



const mapfile_preamble = '' +
'// Map generated by assettool.js'+new Date()+'\n'+
'\n'+
'export const tilesetpath = "'+CONFIG.TILESETFILE+'"\n'+
'export const tiledim = '+CONFIG.TILEDIM+'\n' +
'export const screenxtiles = '+CONFIG.LEVELTILEWIDTH+'\n'+
'export const screenytiles = '+CONFIG.LEVELTILEHEIGHT+'\n'+
'export const tilefilew = '+CONFIG.TILEFILEW+'\n'+ 
'export const tilefileh = '+CONFIG.TILEFILEH+'\n\n' 

const bgtile_string_start = '' +
'export const bgtiles = [\n'+
'   [\n'


export function write_map_file(bg_tiles_0, bg_tiles_1, obj_tiles_1, obj_tiles_2){
    let text = mapfile_preamble; 
    text += bgtile_string_start;

    for(let row = 0; row < bg_tiles_0.length; row++) {
        text += '[ ';
        for(let column = 0; column < bg_tiles_0[row].length; column++) {
            text += bg_tiles_0[row][column];
            if (column != bg_tiles_0.length - 1){
                text += ' , ';
            }
        }
        text += '],\n';
    }
    text += '],\n';
    text += '[\n';
    for(let row = 0; row < bg_tiles_1.length; row++) {
        text += '[ ';
        for(let column = 0; column < bg_tiles_1[row].length; column++) {
            text += bg_tiles_1[row][column];
            if (column != bg_tiles_1.length - 1){
                text += ' , ';
            }
        }
        text += '],\n';
    }
    text += '],];\n\n';

    text += ''+
    'export const objmap = [\n'+
    '[\n';

    for(let row = 0; row < obj_tiles_1.length; row++) {
        text += '[ ';
        for(let column = 0; column < obj_tiles_1[row].length; column++) {
            text += obj_tiles_1[row][column];
            if (column != obj_tiles_1.length - 1){
                text += ' , ';
            }
        }
        text += '],\n';
    }
    text += '],\n';
    text += '[\n';

    for(let row = 0; row < obj_tiles_2.length; row++) {
        text += '[ ';
        for(let column = 0; column < obj_tiles_2[row].length; column++) {
            text += obj_tiles_2[row][column];
            if (column != obj_tiles_2.length - 1){
                text += ' , ';
            }
        }
        text += '],\n';
    }
    text += '],];\n';

    download(text, "map.js", "text/plain");
}


// Function to download data to a file
function download(data, filename, type) {
    var file = new Blob([data], {type: type});
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    else { // Others
        var a = document.createElement("a"),
                url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);  
        }, 0); 
    }
}