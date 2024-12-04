Page({
  data: {
    messages: [
      { id: 1, type: 'agent', avatar: 'https://i.pinimg.com/236x/37/f8/2d/37f82d5a37d07f1abb4f31f2daeacb9f.jpg', content: '您好，有什么可以帮您？' },
    ],
    inputValue: '',
    toView: '',
    autoReplyMap: {
      '营业时间': '我们的营业时间是每天早上8点到晚上10点。',
      '价格': '我们的商品价格根据种类不同，请参见小程序内的商品详情。',
      '茶叶种类': '我们提供绿茶、红茶、乌龙茶等多种选择。',
      '退货':'亲，国内暂不支持退货，请去阿富汗线下店进行售后',
      '你好':'在的,亲'
    },
  },

  // 处理输入框输入
  handleInput(e) {
    this.setData({
      inputValue: e.detail.value,
    });
  },

  // 发送消息
  sendMessage() {
    const { inputValue, messages } = this.data;

    if (!inputValue.trim()) {
      wx.showToast({
        title: '消息不能为空',
        icon: 'none',
      });
      return;
    }

    // 用户消息
    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCrOT_7ozdtf6l2rlRtkPKy8yKneS1KI3Owg&s',
      content: inputValue.trim(),
    };

    this.setData({
      messages: [...messages, userMessage],
      inputValue: '',
      toView: `msg-${messages.length + 1}`,
    });

    // 自动回复
    this.autoReply(userMessage.content);
  },

  // 自动回复逻辑
  autoReply(userMessage) {
    const { messages, autoReplyMap } = this.data;
    let replyContent = '抱歉，我不太明白您的问题。'; // 默认回复

    // 关键词匹配
    for (const keyword in autoReplyMap) {
      if (userMessage.includes(keyword)) {
        replyContent = autoReplyMap[keyword];
        break;
      }
    }

    // 模拟打字延迟
    setTimeout(() => {
      const replyMessage = {
        id: messages.length + 1,
        type: 'agent',
        avatar: 'https://i.pinimg.com/236x/37/f8/2d/37f82d5a37d07f1abb4f31f2daeacb9f.jpg',
        content: replyContent,
      };

      this.setData({
        messages: [...this.data.messages, replyMessage],
        toView: `msg-${messages.length + 1}`,
      });
    }, 1000); // 1秒后回复
  },
});
