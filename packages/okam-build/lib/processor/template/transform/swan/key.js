/**
 * @file 处理 swan 时的 key
 * @author zhoudan03
 */

module.exports = function (attrs, name, tplOpts) {
    let {logger, file} = tplOpts;
    logger.warn(`${file.path}, swan is not support with :key`);
    delete attrs[name];
};
