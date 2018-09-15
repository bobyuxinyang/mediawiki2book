const puppeteer = require('puppeteer');

const toc = 'toc' //table of contents

const startGetPages = async (page) => {
  const toc = page.$(toc)
  toc.parentNode.removeChild(toc)
  await page.$(toc).parentNode.removeChild(child) // 目录下探不足，先排除干扰
  
  console.log(await page.content)

  
}

(async () => {
  const browser = await (puppeteer.launch({  
    timeout: 15000,
    ignoreHTTPSErrors: true,
    devtools: false,
    headless: true
  }));
  const page = await browser.newPage();
  await page.goto('http://main.toyhouse.cc:801/index.php/Main_Page');
  
  startGetPages(page) //开始从首页获取数据
  
  // browser.close();
})();


sudo curl -L "https://github.com/docker/compose/releases/download/1.22.0/docker-compose-Linux-x86_64" -o /usr/local/bin/docker-compose