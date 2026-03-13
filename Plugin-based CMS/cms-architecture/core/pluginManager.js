class PluginManager{

    constructor(){
        this.plugins = []
    }

    register(plugin){
        this.plugins.push(plugin)
    }

    runPlugins(data){

        this.plugins.forEach(plugin=>{
            plugin.execute(data)
        })
    }
}

module.exports = new PluginManager()