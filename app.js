const { createApp } = Vue;

createApp({
  data() {
    return {
      user: {
        name: "韩晓雨",
      },
      menus: ["运营总览", "模板管理", "发送任务", "渠道配置", "数据报表"],
      currentMenu: "运营总览",
      deliveryRate: 97,
      stats: [
        { label: "今日发送量", value: "1,280,430", trend: 5 },
        { label: "待发送任务", value: "42", trend: -8 },
        { label: "模板审核中", value: "16", trend: 12 },
        { label: "通道可用率", value: "99.6%", trend: 2 },
      ],
      languages: ["中文", "English", "Español", "Português"],
      currentLanguage: "中文",
      ipLanguage: "English",
      templates: [
        {
          id: 1,
          title: "营销活动提醒模板",
          owner: "李文欣",
          createdAt: "10:20",
          status: "pending",
          statusLabel: "待审核",
        },
        {
          id: 2,
          title: "验证码模板-登录",
          owner: "赵睿",
          createdAt: "09:45",
          status: "processing",
          statusLabel: "审核中",
        },
        {
          id: 3,
          title: "物流通知模板",
          owner: "郑洋",
          createdAt: "09:10",
          status: "waiting",
          statusLabel: "待补充",
        },
      ],
      actions: ["新建模板", "批量发送", "通道检测", "黑名单同步"],
      channels: ["验证码", "通知", "营销", "国际短信"],
      priorities: ["紧急", "高", "中", "低"],
      balance: "86,420.50",
      todayDebit: "12,380.75",
      currency: "USD",
      pricePerSms: "$0.032",
      form: {
        subject: "",
        channel: "",
        priority: "",
      },
      formMessage: "",
      activities: [
        {
          id: 1,
          task: "双十一预热群发",
          taskCode: "A1",
          owner: "顾琴",
          type: "营销",
          time: "10:05",
          status: "success",
          statusLabel: "发送完成",
        },
        {
          id: 2,
          task: "注册验证码",
          taskCode: "B2",
          owner: "刘博",
          type: "验证码",
          time: "09:52",
          status: "warning",
          statusLabel: "队列中",
        },
        {
          id: 3,
          task: "到期提醒",
          taskCode: "C3",
          owner: "袁伊",
          type: "通知",
          time: "09:20",
          status: "info",
          statusLabel: "发送中",
        },
      ],
      channelHealth: [
        {
          name: "Twilio - 北美",
          successRate: "99.2%",
          latency: "320ms",
          status: "processing",
          statusLabel: "稳定",
        },
        {
          name: "Infobip - 欧洲",
          successRate: "97.8%",
          latency: "410ms",
          status: "pending",
          statusLabel: "观察中",
        },
        {
          name: "CM.com - 拉美",
          successRate: "93.1%",
          latency: "560ms",
          status: "waiting",
          statusLabel: "需要切换",
        },
      ],
    };
  },
  computed: {
    pageTitle() {
      return `${this.currentMenu}概览`;
    },
  },
  methods: {
    submitForm() {
      this.formMessage = `已创建${this.form.channel}发送任务，优先级：${this.form.priority}`;
      this.form.subject = "";
      this.form.channel = "";
      this.form.priority = "";
    },
  },
}).mount("#app");
