const utils = require('./utils')
const fs = require('fs')
const list = [
    '2018清华MEM第二批次大班级宪章',
    '2018清华MEM第二批次ClassLM:大班级-逻辑模型',
    '2018清华MEM第二批次Class:大班级WordPress页面',
    '2018清华MEM第二批次ClassMeeting:大班级-会议纪要',
    '第二批次ClassLM:第一班-逻辑模型',
    'ClassMeeting:第1班-会议纪要',
    'Group:第1班可持续设计小组-绿色便捷',
    'Group:第1班工业设计小组-动起来',
    'Group:第1班商业设计小组-789十一',
    'Group:第1班贯通组-502',
    '第二批次ClassLM:第二班-逻辑模型',
    'ClassMeeting:第2班-会议纪要',
    'Group:第2班可持续设计小组-永恒',
    'Group:第2班工业设计小组-波折坎坷',
    'Group:第2班商业设计小组-无问西东',
    'Group:第2班贯通组-日月同辉',
    '第二批次ClassLM:第三班-逻辑模型',
    'ClassMeeting:第3班-会议纪要',
    'Group:第3班可持续设计小组-可“食”续',
    'Group:第3班工业设计小组-谋事',
    'Group:第3班商业设计小组-和气生财',
    'Group:第3班贯通组-互通有无',
    '第二批次ClassLM:第四班-逻辑模型',
    'ClassMeeting:第4班-会议纪要',
    'Group:第4班可持续设计小组-SPT',
    'Group:第4班工业设计小组-未来已来',
    'Group:第4班商业设计小组-BDT',
    'Group:第4班贯通组-GT',
    '2018级工程管理硕士（MEM）入学导引课第二批次学习小组制度',
    '课程整体逻辑模型',
    '2018级工程管理硕士（MEM）入学导引课第二批次 docker任务 more',
    '安全',
    '活性',
    '宪章',
    'XLP参考文献',
]
const delfile = fs.unlink('content.mediawiki', (err) => {
    console.log(err)
})
const run = () => {
    utils.getContentByName(list)
}

run()