Page({
  data: {
    messages: [],   // 消息列表
    inputMessage: '',  // 用户输入
    scrollTop: 0  // 控制滚动条位置
  },

  // 输入框内容变化时更新
  onInput: function (e) {
    this.setData({
      inputMessage: e.detail.value
    });
  },

  // 发送消息
  sendMessage: function () {
    const message = this.data.inputMessage.trim();
    if (message) {
      this.addMessage('用户', message);
      this.setData({ inputMessage: '' });

      // 模拟客服回复
      const response = this.getResponse(message);
      setTimeout(() => {
        this.addMessage('客服', response);
      }, 1000);  // 模拟客服回复延迟
    }
  },

  // 向消息列表添加消息
  addMessage: function (from, text) {
    this.setData({
      messages: [...this.data.messages, { from, text, id: Date.now() }],
      scrollTop: this.data.scrollTop + 100 // 控制滚动条向下滚动
    });
  },

  // 模拟客服回复
  getResponse: function (message) {
    const responses = {
      '你认识徐昊吗':"我认识，他好像是一个舔狗，很出名",
      '你好': '您好，欢迎咨询！有什么可以帮您的吗？',
      '产品': '我们有多种产品，包括茶杯，茶具，茶叶等。',
      '退货': '如果您需要退货，可以去阿富汗线下店退货',
      '售后': '我们的售后服务电话是 119-119-119。'
    };

    return responses[message] || '抱歉，我没有理解您的问题，请重新提问。';
  }
});
