
      /* 渲染导航、轮播、产品卡片、未来科技项与页脚
     说明：必须保留 head 中的 CSS 与 bootstrap JS 引用*/
      // NAV
      (function () {
        const data = ["智能手机", "智能生态", "云服务", "会员中心", "支持"];
        const el = document.getElementById("navList");
        if (!el) return;
        el.innerHTML = data
          .map(
            (t, i) =>
              `<li class="nav-item"><a class="nav-link ${
                i === 0 ? "active" : ""
              }" href="#" ${i === 0 ? 'aria-current="page"' : ""}>${t}</a></li>`
          )
          .join("");
      })();

      // CAROUSEL
      (function () {
        const slides = [
          {
            img: "./img/banner1.jpg",
            title: "vivo X200s 影像旗舰",
            text: "拍照更专业，视频更清晰，影像更逼真",
          },
          {
            img: "./img/banner2.jpg",
            title: "vivo X200s 影像旗舰",
            text: "拍照更专业，视频更清晰，影像更逼真",
          },
          {
            img: "./img/banner3.jpg",
            title: "vivo X200s 影像旗舰",
            text: "拍照更专业，视频更清晰，影像更逼真",
          },
        ];
        const inner = document.getElementById("carouselInner");
        const indicators = document.getElementById("carouselIndicators");
        if (!inner || !indicators) return;
        inner.innerHTML = slides
          .map(
            (s, i) => `<div class="carousel-item ${i === 0 ? "active" : ""}">
        <img src="${s.img}" class="d-block w-100" alt="${s.title}">
        <div class="carousel-caption d-none d-md-block"><h5>${s.title}</h5><p>${
              s.text
            }</p></div>
      </div>`
          )
          .join("");
        indicators.innerHTML = slides
          .map(
            (s, i) =>
              `<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="${i}" ${
                i === 0 ? 'class="active" aria-current="true"' : ""
              } aria-label="Slide ${i + 1}"></button>`
          )
          .join("");
      })();

      // HOT PRODUCTS
      (function () {
        const products = [
          {
            img: "./img/pic1.webp",
            title: "vivo v50",
            text: "纤薄设计，卓越人像摄影体验",
            price: "￥2499起",
          },
          {
            img: "./img/pic2.jpg",
            title: "vivo v50",
            text: "纤薄设计，卓越人像摄影体验",
            price: "￥2499起",
          },
          {
            img: "./img/pic3.jpg",
            title: "vivo v50",
            text: "纤薄设计，卓越人像摄影体验",
            price: "￥2499起",
          },
        ];
        const row = document.getElementById("hotProductsRow");
        if (!row) return;
        row.innerHTML = products
          .map(
            (p) => `<div class="col-md-4">
        <div class="card">
          <div class="card-img"><img src="${p.img}" class="card-img-top" alt="${p.title}"></div>
          <div class="card-body">
            <h5 class="card-title">${p.title}</h5>
            <p class="card-text">${p.text}</p>
            <p class="price">${p.price}</p>
            <a href="#" class="btn btn-primary">立即购买</a>
          </div>
        </div>
      </div>`
          )
          .join("");
      })();

      // FUTURE FEATURES
      (function () {
        const items = [
          {
            icon: "bi bi-camera",
            title: "AI影像系统",
            desc: "基于AI技术的智能影像处理系统，提供更专业的影像效果",
          },
          {
            icon: "bi bi-lightning-charge",
            title: "200W快充技术",
            desc: "9分钟充满5000mAh电池，告别电量焦虑",
          },
          {
            icon: "bi bi-cpu",
            title: "自研芯片V3",
            desc: "性能提升40%，功耗降低30%，极致体验",
          },
          {
            icon: "bi bi-display",
            title: "E6 AMOLED屏",
            desc: "2K分辨率，2000nit峰值亮度，自适应刷新率",
          },
          {
            icon: "bi bi-battery-full",
            title: "智能续航系统",
            desc: "AI智能调度，续航提升25%，使用更持久",
          },
          {
            icon: "bi bi-shield-check",
            title: "隐私保护",
            desc: "全方位隐私保护系统，确保数据安全",
          },
        ];
        const row = document.getElementById("futureFeaturesRow");
        if (!row) return;
        row.innerHTML = items
          .map(
            (f) => `<div class="col-md-4 text-center mt-5">
          <i class="${f.icon} future-icon"></i>
          <h3 class="future-title">${f.title}</h3>
          <p class="future-desc">${f.desc}</p>
        </div>`
          )
          .join("");
      })();

      // FOOTER
      (function () {
        const series = ["X系列", "Y系列", "折叠屏系列", "智能配件"];
        const social = [
          "facebook",
          "twitter",
          "instagram",
          "youtube",
          "wechat",
        ];
        const footer = document.getElementById("footerRow");
        if (!footer) return;
        let html = "";
        // 三列重复产品系列（保持结构和类）
        for (let i = 0; i < 3; i++) {
          html += `<dl class="col-lg-3 col-md-6"><dt>产品系列</dt>${series
            .map((s) => `<dd><a href="#">${s}</a></dd>`)
            .join("")}</dl>`;
        }
        // 第四列：关注我们（包含社交图标与订阅表单）
        html += `<dl class="col-lg-3 col-md-6"><dt>关注我们</dt><dd>
      <div class="icons mt-4">${social
        .map((n) => `<a href="#"><i class="bi bi-${n}"></i></a>`)
        .join("")}</div>
      <p class="my-4 news">订阅最新产品咨询</p>
      <div class="input-group mb-3">
        <input type="email" class="form-control bg-dark border-dark text-light" placeholder="请输入您的邮箱" aria-label="Recipient's username" aria-describedby="button-addon2">
        <button class="btn btn-outline-secondary" type="button" id="button-addon2">订阅</button>
      </div>
    </dd></dl>`;
        footer.innerHTML = html;
      })();