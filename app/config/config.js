const CONFIG = {
    LOG_CONFIG: {
        // 指定输出文件类型和文件名
        appenders: {
            "error": {
                "category": "errorLogger",      // logger 名称
                "type": "dateFile",             // 日志类型为 dateFile
                "filename": "logs/error/error", // 日志输出位置
                "alwaysIncludePattern": true,   // 是否总是有后缀名
                "pattern": "yyyy-MM-dd-hh.log"  // 后缀，每小时创建一个新的日志文件
            },
            "response": {
                "category": "resLogger",
                "type": "dateFile",
                "filename": "logs/response/response",
                "alwaysIncludePattern": true,
                "pattern": "yyyy-MM-dd-hh.log"
            }
        },
        categories: {
            "error": { appenders: ["error"], level: "error" },
            "response": { appenders: ["response"], level: "info" },
            "default": { appenders: ["response"], level: 'info' }
        }
    }
}

module.exports = CONFIG;