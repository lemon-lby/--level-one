module.exports = class FileListPlugin{
    constructor(fileName = "filelist.txt"){
        this.fileName = fileName;
    }
    apply(complier){
        complier.hooks.emit.tap("FileListPlugin",complation => {
            var fileList = [];
            for (const key in complation.assets) {
                var content = `【${key}】
                大小：${complation.assets[key].size()/1000}KB`;
                fileList.push(content);
            }

            var str = fileList.join("\n\n");
            complation.assets[this.fileName] = {
                source(){
                    return str;
                },
                size(){
                    return str.length;
                }
            }
        })
    }
}