const utils = require('./utils')
const fs = require('fs')
const list = [
    '班级宪章',
    'ClassLM:大贯通组-逻辑模型汇总',
    'ClassLM:第一批次XLP学员-逻辑模型汇总',
    'ClassLM:第一班-逻辑模型',
    'ClassMeeting:第一班-会议纪要',
    'Group:第一班可持续设计小组',
    'Group:第一班工业设计小组',
    'Group:第一班商业设计组',
    'Group:第一班贯通组',
    'ClassLM:第二班-逻辑模型',
    'ClassMeeting:第二班-会议纪要',
    'Group:第二班可持续设计小组',
    'Group:第二班工业设计小组',
    'Group:第二班商业设计组',
    'Group:第二班贯通组',
    'ClassLM:第三班-逻辑模型',
    'ClassMeeting:第三班-会议纪要',
    'Group:第三班可持续设计小组',
    'Group:第三班工业设计小组',
    'Group:第三班商业设计组',
    'Group:第三班贯通组',
    'ClassLM:第四班-逻辑模型',
    'ClassMeeting:第四班-会议纪要',
    'Group:第四班可持续设计小组',
    'Group:第四班工业设计小组',
    'Group:第四班商业设计组',
    'Group:第四班贯通组',
    'Docker搭建troubleshooting',
]
const delfile = fs.unlink('content.mediawiki', (err) => {
    console.log(err)
})
const run = () => {
    utils.getContentByName(list)
}

run()