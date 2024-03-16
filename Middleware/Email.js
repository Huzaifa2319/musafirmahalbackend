function Email({ trip, book }) {
  console.log("trip is ", trip);
  console.log("book is ", book);

  const email = `
<html
  dir="ltr"
  xmlns="http://www.w3.org/1999/xhtml"
  xmlns:o="urn:schemas-microsoft-com:office:office"
>
  <head>
    <style>
      /* CONFIG STYLES Please do not delete and edit CSS styles below */
      /* IMPORTANT THIS STYLES MUST BE ON FINAL EMAIL */
      .rollover:hover .rollover-first {
        max-height: 0px !important;
        display: none !important;
      }
      .rollover:hover .rollover-second {
        max-height: none !important;
        display: block !important;
      }
      .rollover span {
        font-size: 0px;
      }
      u + .body img ~ div div {
        display: none;
      }
      #outlook a {
        padding: 0;
      }
      span.MsoHyperlink,
      span.MsoHyperlinkFollowed {
        color: inherit;
        mso-style-priority: 99;
      }
      a.es-button {
        mso-style-priority: 100 !important;
        text-decoration: none !important;
      }
      a[x-apple-data-detectors] {
        color: inherit !important;
        text-decoration: none !important;
        font-size: inherit !important;
        font-family: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
      }
      .es-desk-hidden {
        display: none;
        float: left;
        overflow: hidden;
        width: 0;
        max-height: 0;
        line-height: 0;
        mso-hide: all;
      }
      .es-button-border:hover > a.es-button {
        color: #ffffff !important;
      }
      /*
  END OF IMPORTANT
*/
      body {
        width: 100%;
        height: 100%;
      }
      table {
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
        border-collapse: collapse;
        border-spacing: 0px;
      }
      table td,
      body,
      .es-wrapper {
        padding: 0;
        margin: 0;
      }
      .es-content,
      .es-header,
      .es-footer {
        width: 100%;
        table-layout: fixed !important;
      }
      img {
        display: block;
        font-size: 14px;
        border: 0;
        outline: none;
        text-decoration: none;
      }
      p,
      hr {
        margin: 0;
      }
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        margin: 0;
        font-family: Jost, Arial, sans-serif;
        mso-line-height-rule: exactly;
        letter-spacing: 0;
      }
      p,
      a {
        mso-line-height-rule: exactly;
      }
      .es-left {
        float: left;
      }
      .es-right {
        float: right;
      }
      .es-menu td {
        border: 0;
      }
      .es-menu td a img {
        display: inline !important;
        vertical-align: middle;
      }
      /*
  END CONFIG STYLES
  */
      s {
        text-decoration: line-through;
      }
      ul,
      ol {
        font-family: Jost, Arial, sans-serif;
        padding: 0px 0px 0px 40px;
        margin: 15px 0px;
      }
      ul li {
        color: #020202;
      }
      ol li {
        color: #020202;
      }
      li {
        margin: 0px 0px 15px;
        font-size: 14px;
      }
      a {
        text-decoration: underline;
      }
      .es-menu td a {
        font-family: Jost, Arial, sans-serif;
        text-decoration: none;
        display: block;
      }
      .es-wrapper {
        width: 100%;
        height: 100%;
        background-repeat: repeat;
        background-position: center top;
      }
      .es-wrapper-color,
      .es-wrapper {
        background-color: #f6f6f6;
      }
      .es-content-body p,
      .es-footer-body p,
      .es-header-body p,
      .es-infoblock p {
        font-family: Jost, Arial, sans-serif;
        line-height: 150%;
        letter-spacing: 0;
      }
      .es-header {
        background-color: transparent;
        background-repeat: repeat;
        background-position: center top;
      }
      .es-header-body {
        background-color: #d4d9fa;
      }
      .es-header-body p {
        color: #020202;
        font-size: 14px;
      }
      .es-header-body a {
        color: #020202;
        font-size: 14px;
      }
      .es-footer {
        background-color: transparent;
        background-repeat: repeat;
        background-position: center top;
      }
      .es-footer-body {
        background-color: #3a0bc7;
      }
      .es-footer-body p {
        color: #fffdf7;
        font-size: 14px;
      }
      .es-footer-body a {
        color: #fffdf7;
        font-size: 14px;
      }
      .es-content-body {
        background-color: #fffdf7;
      }
      .es-content-body p {
        color: #020202;
        font-size: 14px;
      }
      .es-content-body a {
        color: #6798c0;
        font-size: 14px;
      }
      .es-infoblock p {
        font-size: 12px;
        color: #cccccc;
      }
      .es-infoblock a {
        font-size: 12px;
        color: #cccccc;
      }
      h1 {
        font-size: 30px;
        font-style: normal;
        font-weight: normal;
        line-height: 120%;
        color: #020202;
      }
      h2 {
        font-size: 24px;
        font-style: normal;
        font-weight: normal;
        line-height: 120%;
        color: #020202;
      }
      h3 {
        font-size: 20px;
        font-style: normal;
        font-weight: normal;
        line-height: 120%;
        color: #020202;
      }
      h4 {
        font-size: 24px;
        font-style: normal;
        font-weight: normal;
        line-height: 120%;
        color: #333333;
      }
      h5 {
        font-size: 20px;
        font-style: normal;
        font-weight: normal;
        line-height: 120%;
        color: #333333;
      }
      h6 {
        font-size: 16px;
        font-style: normal;
        font-weight: normal;
        line-height: 120%;
        color: #333333;
      }
      .es-header-body h1 a,
      .es-content-body h1 a,
      .es-footer-body h1 a {
        font-size: 30px;
      }
      .es-header-body h2 a,
      .es-content-body h2 a,
      .es-footer-body h2 a {
        font-size: 24px;
      }
      .es-header-body h3 a,
      .es-content-body h3 a,
      .es-footer-body h3 a {
        font-size: 20px;
      }
      .es-header-body h4 a,
      .es-content-body h4 a,
      .es-footer-body h4 a {
        font-size: 24px;
      }
      .es-header-body h5 a,
      .es-content-body h5 a,
      .es-footer-body h5 a {
        font-size: 20px;
      }
      .es-header-body h6 a,
      .es-content-body h6 a,
      .es-footer-body h6 a {
        font-size: 16px;
      }
      a.es-button,
      button.es-button {
        padding: 10px 20px 10px 20px;
        display: inline-block;
        background: #fdc921;
        border-radius: 30px 30px 30px 30px;
        font-size: 18px;
        font-family: Jost, Arial, sans-serif;
        font-weight: normal;
        font-style: normal;
        line-height: 120%;
        color: #ffffff;
        text-decoration: none !important;
        width: auto;
        text-align: center;
        letter-spacing: 0;
        mso-padding-alt: 0;
        mso-border-alt: 10px solid #fdc921;
      }
      .es-button-border {
        border-style: solid;
        border-color: #2cb543 #2cb543 #2cb543 #2cb543;
        background: #fdc921;
        border-width: 0px 0px 0px 0px;
        display: inline-block;
        border-radius: 30px 30px 30px 30px;
        width: auto;
        mso-hide: all;
      }
      .es-button img {
        display: inline-block;
        vertical-align: middle;
      }
      .es-fw,
      .es-fw .es-button {
        display: block;
      }
      .es-il,
      .es-il .es-button {
        display: inline-block;
      }
      .es-text-rtl h1,
      .es-text-rtl h2,
      .es-text-rtl h3,
      .es-text-rtl h4,
      .es-text-rtl h5,
      .es-text-rtl h6,
      .es-text-rtl input,
      .es-text-rtl label,
      .es-text-rtl textarea,
      .es-text-rtl p,
      .es-text-rtl ol,
      .es-text-rtl ul,
      .es-text-rtl .es-menu a,
      .es-text-rtl .es-table {
        direction: rtl;
      }
      .es-text-ltr h1,
      .es-text-ltr h2,
      .es-text-ltr h3,
      .es-text-ltr h4,
      .es-text-ltr h5,
      .es-text-ltr h6,
      .es-text-ltr input,
      .es-text-ltr label,
      .es-text-ltr textarea,
      .es-text-ltr p,
      .es-text-ltr ol,
      .es-text-ltr ul,
      .es-text-ltr .es-menu a,
      .es-text-ltr .es-table {
        direction: ltr;
      }
      .es-text-rtl ol,
      .es-text-rtl ul {
        padding: 0px 40px 0px 0px;
      }
      .es-text-ltr ul,
      .es-text-ltr ol {
        padding: 0px 0px 0px 40px;
      }
      /*
  RESPONSIVE STYLES
  Please do not delete and edit CSS styles below.

  If you don't need responsive layout, please delete this section.
  */
      @media only screen and (max-width: 600px) {
        *[class="gmail-fix"] {
          display: none !important;
        }
        p,
        a {
          line-height: 150% !important;
        }
        h1,
        h1 a {
          line-height: 120% !important;
        }
        h2,
        h2 a {
          line-height: 120% !important;
        }
        h3,
        h3 a {
          line-height: 120% !important;
        }
        h4,
        h4 a {
          line-height: 120% !important;
        }
        h5,
        h5 a {
          line-height: 120% !important;
        }
        h6,
        h6 a {
          line-height: 120% !important;
        }
        .es-header-body p {
        }
        .es-content-body p {
        }
        .es-footer-body p {
        }
        .es-infoblock p {
        }
        h1 {
          font-size: 30px !important;
          text-align: left;
        }
        h2 {
          font-size: 24px !important;
          text-align: left;
        }
        h3 {
          font-size: 20px !important;
          text-align: left;
        }
        h4 {
          font-size: 24px !important;
          text-align: left;
        }
        h5 {
          font-size: 20px !important;
          text-align: left;
        }
        h6 {
          font-size: 16px !important;
          text-align: left;
        }
        .es-header-body h1 a,
        .es-content-body h1 a,
        .es-footer-body h1 a {
          font-size: 30px !important;
        }
        .es-header-body h2 a,
        .es-content-body h2 a,
        .es-footer-body h2 a {
          font-size: 24px !important;
        }
        .es-header-body h3 a,
        .es-content-body h3 a,
        .es-footer-body h3 a {
          font-size: 20px !important;
        }
        .es-header-body h4 a,
        .es-content-body h4 a,
        .es-footer-body h4 a {
          font-size: 24px !important;
        }
        .es-header-body h5 a,
        .es-content-body h5 a,
        .es-footer-body h5 a {
          font-size: 20px !important;
        }
        .es-header-body h6 a,
        .es-content-body h6 a,
        .es-footer-body h6 a {
          font-size: 16px !important;
        }
        .es-menu td a {
          font-size: 14px !important;
        }
        .es-header-body p,
        .es-header-body a {
          font-size: 14px !important;
        }
        .es-content-body p,
        .es-content-body a {
          font-size: 14px !important;
        }
        .es-footer-body p,
        .es-footer-body a {
          font-size: 14px !important;
        }
        .es-infoblock p,
        .es-infoblock a {
          font-size: 12px !important;
        }
        .es-m-txt-c,
        .es-m-txt-c h1,
        .es-m-txt-c h2,
        .es-m-txt-c h3,
        .es-m-txt-c h4,
        .es-m-txt-c h5,
        .es-m-txt-c h6 {
          text-align: center !important;
        }
        .es-m-txt-r,
        .es-m-txt-r h1,
        .es-m-txt-r h2,
        .es-m-txt-r h3,
        .es-m-txt-r h4,
        .es-m-txt-r h5,
        .es-m-txt-r h6 {
          text-align: right !important;
        }
        .es-m-txt-j,
        .es-m-txt-j h1,
        .es-m-txt-j h2,
        .es-m-txt-j h3,
        .es-m-txt-j h4,
        .es-m-txt-j h5,
        .es-m-txt-j h6 {
          text-align: justify !important;
        }
        .es-m-txt-l,
        .es-m-txt-l h1,
        .es-m-txt-l h2,
        .es-m-txt-l h3,
        .es-m-txt-l h4,
        .es-m-txt-l h5,
        .es-m-txt-l h6 {
          text-align: left !important;
        }
        .es-m-txt-r img,
        .es-m-txt-c img,
        .es-m-txt-l img {
          display: inline !important;
        }
        .es-m-txt-r .rollover:hover .rollover-second,
        .es-m-txt-c .rollover:hover .rollover-second,
        .es-m-txt-l .rollover:hover .rollover-second {
          display: inline !important;
        }
        .es-m-txt-r .rollover span,
        .es-m-txt-c .rollover span,
        .es-m-txt-l .rollover span {
          line-height: 0 !important;
          font-size: 0 !important;
        }
        .es-spacer {
          display: inline-table;
        }
        a.es-button,
        button.es-button {
          font-size: 18px !important;
          line-height: 120% !important;
        }
        a.es-button,
        button.es-button,
        .es-button-border {
          display: inline-block !important;
        }
        .es-m-fw,
        .es-m-fw.es-fw,
        .es-m-fw .es-button {
          display: block !important;
        }
        .es-m-il,
        .es-m-il .es-button,
        .es-social,
        .es-social td,
        .es-menu {
          display: inline-block !important;
        }
        .es-adaptive table,
        .es-left,
        .es-right {
          width: 100% !important;
        }
        .es-content table,
        .es-header table,
        .es-footer table,
        .es-content,
        .es-footer,
        .es-header {
          width: 100% !important;
          max-width: 600px !important;
        }
        .adapt-img {
          width: 100% !important;
          height: auto !important;
        }
        .es-mobile-hidden,
        .es-hidden {
          display: none !important;
        }
        .es-desk-hidden {
          width: auto !important;
          overflow: visible !important;
          float: none !important;
          max-height: inherit !important;
          line-height: inherit !important;
        }
        tr.es-desk-hidden {
          display: table-row !important;
        }
        table.es-desk-hidden {
          display: table !important;
        }
        td.es-desk-menu-hidden {
          display: table-cell !important;
        }
        .es-menu td {
          width: 1% !important;
        }
        table.es-table-not-adapt,
        .esd-block-html table {
          width: auto !important;
        }
        .es-social td {
          padding-bottom: 10px;
        }
        .h-auto {
          height: auto !important;
        }
      }
    </style>
  </head>
  <body class="body">
    <div dir="ltr" class="es-wrapper-color">
      <!--[if gte mso 9]>
        <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
          <v:fill type="tile" color="#f6f6f6"></v:fill>
        </v:background>
      <![endif]-->
      <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0">
        <tbody>
          <tr>
            <td class="esd-email-paddings" valign="top">
              <table
                class="esd-header-popover es-header"
                cellspacing="0"
                cellpadding="0"
                align="center"
              >
                <tbody>
                  <tr>
                    <td class="esd-stripe" align="center">
                      <table
                        class="es-header-body"
                        width="600"
                        cellspacing="0"
                        cellpadding="0"
                        bgcolor="#D4D9FA"
                        align="center"
                        style="background-color: #d4d9fa"
                      >
                        <tbody>
                          <tr>
                            <td
                              class="esd-structure es-p35t es-p30b es-p20r es-p20l"
                              align="left"
                              bgcolor="#cbc5b4"
                              style="background-color: #cbc5b4"
                            >
                              <!--[if mso]><table width="560" cellpadding="0"
                          cellspacing="0"><tr><td width="324" valign="top"><![endif]-->
                              <table
                                class="es-left"
                                cellspacing="0"
                                cellpadding="0"
                                align="left"
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      class="es-m-p0r es-m-p20b esd-container-frame"
                                      width="324"
                                      valign="top"
                                      align="center"
                                    >
                                      <table
                                        width="100%"
                                        cellspacing="0"
                                        cellpadding="0"
                                      >
                                        <tbody>
                                          <tr>
                                            <td
                                              align="center"
                                              class="esd-block-image"
                                              style="font-size: 0"
                                            >
                                              <a target="_blank">
                                                <img
                                                  src="https://feyrwev.stripocdn.email/content/guids/CABINET_abd2fc822d030d7bd658e469ad481b49ac7f9230838b861d516aae6b8ae2bd20/images/log2.png"
                                                  alt=""
                                                  width="200"
                                                  class="adapt-img"
                                                />
                                              </a>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <!--[if mso]></td><td width="20"></td><td width="216" valign="top"><![endif]-->
                              <table
                                class="es-right"
                                cellspacing="0"
                                cellpadding="0"
                                align="right"
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      class="esd-container-frame"
                                      width="216"
                                      align="left"
                                    >
                                      <table
                                        width="100%"
                                        cellspacing="0"
                                        cellpadding="0"
                                      >
                                        <tbody>
                                          <tr>
                                            <td
                                              align="right"
                                              class="esd-block-text es-m-txt-l"
                                            >
                                              <h2>​</h2>
                                              <p>​</p>
                                              <h2>Musafir Mahal</h2>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td
                                              align="right"
                                              class="esd-block-text es-m-txt-l es-p5t"
                                            >
                                              <p>book your trips online</p>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <!--[if mso]></td></tr></table><![endif]-->
                            </td>
                          </tr>
                          <tr>
                            <td
                              class="esd-structure es-p20r es-p20l"
                              align="left"
                              bgcolor="#cbc5b4"
                              style="background-color: #cbc5b4"
                            >
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      width="560"
                                      class="esd-container-frame"
                                      align="center"
                                      valign="top"
                                    >
                                      <table
                                        cellpadding="0"
                                        cellspacing="0"
                                        width="100%"
                                      >
                                        <tbody>
                                          <tr>
                                            <td
                                              align="center"
                                              class="esd-block-spacer es-p5t es-p5b"
                                              style="font-size: 0"
                                            >
                                              <table
                                                border="0"
                                                width="100%"
                                                height="100%"
                                                cellpadding="0"
                                                cellspacing="0"
                                              >
                                                <tbody>
                                                  <tr>
                                                    <td
                                                      style="
                                                        border-bottom: 1px solid
                                                          #333333;
                                                        background: unset;
                                                        height: 1px;
                                                        width: 100%;
                                                        margin: 0px;
                                                      "
                                                    ></td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                class="es-content"
                cellspacing="0"
                cellpadding="0"
                align="center"
              >
                <tbody>
                  <tr>
                    <td class="esd-stripe" align="center">
                      <table
                        class="es-content-body"
                        width="600"
                        cellspacing="0"
                        cellpadding="0"
                        bgcolor="#D4D9FA"
                        align="center"
                        style="
                          background-color: #d4d9fa;
                          background-image: url(https://feyrwev.stripocdn.email/content/guids/CABINET_e18e8b6ad0d2f530731f1cc3bd27d47df9d75aa833914e627ec524bf07cda11b/images/14731345_rm222mind20_1_5nq.png);
                          background-repeat: no-repeat;
                          background-position: right bottom;
                        "
                        background="https://feyrwev.stripocdn.email/content/guids/CABINET_e18e8b6ad0d2f530731f1cc3bd27d47df9d75aa833914e627ec524bf07cda11b/images/14731345_rm222mind20_1_5nq.png"
                        esd-img-prev-position="right bottom"
                      >
                        <tbody>
                          <tr>
                            <td
                              class="esd-structure es-p30t es-p20b es-p20r es-p20l"
                              align="left"
                              bgcolor="#cbc5b4"
                              style="background-color: #cbc5b4"
                            >
                              <!--[if mso]><table width="560" cellpadding="0" cellspacing="0"><tr><td width="448" valign="top"><![endif]-->
                              <table
                                cellspacing="0"
                                cellpadding="0"
                                align="left"
                                class="es-left"
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      class="es-m-p0r es-m-p20b esd-container-frame"
                                      width="448"
                                      valign="top"
                                      align="center"
                                    >
                                      <table
                                        width="100%"
                                        cellspacing="0"
                                        cellpadding="0"
                                      >
                                        <tbody>
                                          <tr>
                                            <td
                                              align="left"
                                              class="esd-block-text"
                                            >
                                              <h1>
                                                Your Booking has been confirmed
                                              </h1>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td
                                              align="left"
                                              class="esd-block-text es-p25t es-p40b es-m-p40r"
                                            >
                                              <h3>Dear ${book.name},</h3>
                                              <p><br /></p>
                                              <p>
                                                We are thrilled to confirm that
                                                your Booking through Musafir
                                                Mahal has been successfully
                                                processed! Your journey awaits,
                                                and we're excited to be a part
                                                of your travel experience..
                                              </p>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <!--[if mso]></td><td width="20"></td><td width="92" valign="top"><![endif]-->
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                class="es-right"
                                align="right"
                              >
                                <tbody>
                                  <tr class="es-visible-desktop-only">
                                    <td
                                      width="92"
                                      class="esd-container-frame"
                                      align="left"
                                    >
                                      <table
                                        cellpadding="0"
                                        cellspacing="0"
                                        width="100%"
                                        role="presentation"
                                      >
                                        <tbody>
                                          <tr>
                                            <td
                                              align="center"
                                              class="esd-empty-container"
                                              style="display: none"
                                            ></td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <!--[if mso]></td></tr></table><![endif]-->
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                cellpadding="0"
                cellspacing="0"
                class="es-content"
                align="center"
              >
                <tbody>
                  <tr>
                    <td class="esd-stripe" align="center">
                      <table
                        bgcolor="#fffdf7"
                        class="es-content-body"
                        align="center"
                        cellpadding="0"
                        cellspacing="0"
                        width="600"
                      >
                        <tbody>
                          <tr>
                            <td
                              class="esd-structure es-p20t es-p20r es-p20l"
                              align="left"
                              bgcolor="#fdfaf2"
                              style="background-color: #fdfaf2"
                            >
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                align="right"
                                class="es-right"
                                width="100%"
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      width="560"
                                      class="esd-container-frame"
                                      align="center"
                                      valign="top"
                                    >
                                      <table
                                        cellpadding="0"
                                        cellspacing="0"
                                        width="100%"
                                      >
                                        <tbody>
                                          <tr>
                                            <td
                                              align="left"
                                              class="esd-block-text"
                                            >
                                              <h2>Your DETAILS</h2>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td
                                              align="left"
                                              class="esd-block-text es-p10t es-p10b"
                                            >
                                              <ul>
                                                <li>
                                                  <strong>Name:</strong> ${book.name}
                                                  
                                                </li>
                                                <li>
                                                  <strong>CNIC:</strong>
                                                  ${book.cnic}
                                                </li>
                                                <li>
                                                  <strong>Phone:</strong>
                                                  ${book.phone}
                                                </li>
                                                <li>
                                                  <strong>Email:</strong>
                                                  ${book.email}
                                                </li>
                                              </ul>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                          <tr>
                            <td
                              class="esd-structure es-p20r es-p20l"
                              align="left"
                            >
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      width="560"
                                      class="esd-container-frame"
                                      align="center"
                                      valign="top"
                                    >
                                      <table
                                        cellpadding="0"
                                        cellspacing="0"
                                        width="100%"
                                      >
                                        <tbody>
                                          <tr>
                                            <td
                                              align="center"
                                              class="esd-block-spacer es-p5t es-p5b"
                                              style="font-size: 0"
                                            >
                                              <table
                                                border="0"
                                                width="100%"
                                                height="100%"
                                                cellpadding="0"
                                                cellspacing="0"
                                              >
                                                <tbody>
                                                  <tr>
                                                    <td
                                                      style="
                                                        border-bottom: 1px solid
                                                          #d4d9fa;
                                                        background: unset;
                                                        height: 1px;
                                                        width: 100%;
                                                        margin: 0px;
                                                      "
                                                    ></td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                          <tr>
                            <td
                              class="esd-structure es-p20t es-p20r es-p20l"
                              align="left"
                            >
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      width="560"
                                      class="esd-container-frame"
                                      align="center"
                                      valign="top"
                                    >
                                      <table
                                        cellpadding="0"
                                        cellspacing="0"
                                        width="100%"
                                      >
                                        <tbody>
                                          <tr>
                                            <td
                                              align="left"
                                              class="esd-block-text"
                                            >
                                              <h2>Booking DETAILS</h2>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td
                                              align="left"
                                              class="esd-block-text es-p10t es-p10b"
                                            >
                                              <ul>
                                                <li>
                                                  <strong>Trip Name:</strong>
                                                  ${trip.name}
                                                </li>
                                              </ul>

                                              <ul>
                                                <li>
                                                  <strong
                                                    >Departure Date:</strong
                                                  >
                                                  ${trip.date}
                                                </li>
                                                <li>
                                                  <strong>Duration</strong>: 
                                                  ${trip.duration}
                                                </li>
                                                <li>
                                                  <strong>Total:</strong> 
                                                  ${book.grandTotal}
                                                </li>
                                                <li>
                                                  <strong>No of Tickets:</strong>
                                                  ${book.no_tickets}
                                                </li>
                                                <li>
                                                  <strong>Status:</strong>
                                                  ${book.status}
                                                </li>
                                              </ul>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                          <tr>
                            <td
                              class="esd-structure es-p20t es-p20r es-p20l"
                              align="left"
                              bgcolor="#efefef"
                              style="background-color: #efefef"
                            >
                              <!--[if mso]><table width="560" cellpadding="0" cellspacing="0"><tr><td width="174" valign="top"><![endif]-->
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                class="es-left"
                                align="left"
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      width="174"
                                      class="esd-container-frame"
                                      align="left"
                                    >
                                      <table
                                        cellpadding="0"
                                        cellspacing="0"
                                        width="100%"
                                        role="presentation"
                                      >
                                        <tbody>
                                          <tr>
                                            <td
                                              align="left"
                                              class="esd-block-text"
                                            >
                                              <h1>Instructions:</h1>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <!--[if mso]></td><td width="20"></td><td width="366" valign="top"><![endif]-->
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                class="es-right"
                                align="right"
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      width="366"
                                      class="esd-container-frame"
                                      align="left"
                                    >
                                      <table
                                        cellpadding="0"
                                        cellspacing="0"
                                        width="100%"
                                        role="presentation"
                                      >
                                        <tbody>
                                          <tr>
                                            <td
                                              align="left"
                                              class="esd-block-text"
                                              bgcolor="#efefef"
                                            >
                                              <ul>
                                                <li style="color: #020202">
                                                  <span
                                                    style="
                                                      background: transparent;
                                                      color: #020202;
                                                    "
                                                    >Please arrive at the
                                                    departure location at least
                                                    30 min before
                                                    departure.</span
                                                  >
                                                </li>
                                                <li style="color: #020202">
                                                  <span
                                                    style="
                                                      background: transparent;
                                                      color: #020202;
                                                    "
                                                    >Make sure to carry your
                                                    valid identification and
                                                    this confirmation email for
                                                    hassle-free boarding.</span
                                                  >
                                                </li>
                                              </ul>
                                              <p
                                                style="
                                                  margin-left: 40px;
                                                  color: #020202;
                                                "
                                              >
                                                <span
                                                  style="
                                                    background: transparent;
                                                  "
                                                  >Thank you for choosing
                                                  Musafir Mahal. We wish you a
                                                  pleasant journey filled with
                                                  unforgettable moments!</span
                                                >
                                              </p>
                                              <p
                                                style="
                                                  margin-left: 40px;
                                                  color: #020202;
                                                "
                                              >
                                                <span
                                                  style="
                                                    background: transparent;
                                                  "
                                                  >Happy travels,</span
                                                >
                                              </p>
                                              <p
                                                style="
                                                  margin-left: 40px;
                                                  color: #020202;
                                                "
                                              >
                                                <span
                                                  style="
                                                    background: transparent;
                                                  "
                                                  >Musafir Mahal Team</span
                                                >
                                              </p>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <!--[if mso]></td></tr></table><![endif]-->
                            </td>
                          </tr>
                          <tr>
                            <td
                              class="esd-structure es-p20r es-p20l"
                              align="left"
                            >
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      width="560"
                                      class="esd-container-frame"
                                      align="center"
                                      valign="top"
                                    >
                                      <table
                                        cellpadding="0"
                                        cellspacing="0"
                                        width="100%"
                                      >
                                        <tbody>
                                          <tr>
                                            <td
                                              align="center"
                                              class="esd-block-spacer es-p5t es-p5b"
                                              style="font-size: 0"
                                            >
                                              <table
                                                border="0"
                                                width="100%"
                                                height="100%"
                                                cellpadding="0"
                                                cellspacing="0"
                                              >
                                                <tbody>
                                                  <tr>
                                                    <td
                                                      style="
                                                        border-bottom: 1px solid
                                                          #d4d9fa;
                                                        background: unset;
                                                        height: 1px;
                                                        width: 100%;
                                                        margin: 0px;
                                                      "
                                                    ></td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                          <tr>
                            <td
                              class="esd-structure es-p20r es-p20l"
                              align="left"
                            >
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      width="560"
                                      class="esd-container-frame"
                                      align="center"
                                      valign="top"
                                    >
                                      <table
                                        cellpadding="0"
                                        cellspacing="0"
                                        width="100%"
                                      >
                                        <tbody>
                                          <tr>
                                            <td
                                              align="center"
                                              class="esd-block-spacer es-p5t es-p5b"
                                              style="font-size: 0"
                                            >
                                              <table
                                                border="0"
                                                width="100%"
                                                height="100%"
                                                cellpadding="0"
                                                cellspacing="0"
                                              >
                                                <tbody>
                                                  <tr>
                                                    <td
                                                      style="
                                                        border-bottom: 1px solid
                                                          #d4d9fa;
                                                        background: unset;
                                                        height: 1px;
                                                        width: 100%;
                                                        margin: 0px;
                                                      "
                                                    ></td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                          <tr>
                            <td
                              class="esd-structure es-p20r es-m-p40b es-m-p0r"
                              align="left"
                              bgcolor="#cbc5b4"
                              style="background-color: #cbc5b4"
                            >
                              <!--[if mso]><table width="580" cellpadding="0" cellspacing="0"><tr><td width="325" valign="top"><![endif]-->
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                align="left"
                                class="es-left"
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      width="325"
                                      class="esd-container-frame"
                                      align="left"
                                    >
                                      <table
                                        cellpadding="0"
                                        cellspacing="0"
                                        width="100%"
                                        role="presentation"
                                      >
                                        <tbody>
                                          <tr>
                                            <td
                                              align="center"
                                              class="esd-block-image"
                                              style="font-size: 0"
                                            >
                                              <a target="_blank">
                                                <img
                                                  src="https://feyrwev.stripocdn.email/content/guids/CABINET_abd2fc822d030d7bd658e469ad481b49ac7f9230838b861d516aae6b8ae2bd20/images/mm_logo_t1.png"
                                                  alt=""
                                                  width="325"
                                                  class="adapt-img"
                                                />
                                              </a>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <!--[if mso]></td><td width="20"></td><td width="235" valign="top"><![endif]-->
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                class="es-right"
                                align="right"
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      width="235"
                                      align="left"
                                      class="esd-container-frame"
                                    >
                                      <table
                                        cellpadding="0"
                                        cellspacing="0"
                                        width="100%"
                                      >
                                        <tbody>
                                          <tr>
                                            <td
                                              align="left"
                                              class="esd-block-text es-p20t es-m-p20r es-m-p20l"
                                            >
                                              <a>
                                                https://www.musafirmahal.com/
                                              </a>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td
                                              align="left"
                                              class="esd-block-social es-p10t es-m-p20r es-m-p20l"
                                              style="font-size: 0"
                                            >
                                              <table
                                                cellpadding="0"
                                                cellspacing="0"
                                                class="es-table-not-adapt es-social"
                                              >
                                                <tbody>
                                                  <tr>
                                                    <td
                                                      align="center"
                                                      valign="top"
                                                      class="es-p20r"
                                                    >
                                                      <a
                                                        target="_blank"
                                                        href="https://www.facebook.com/profile.php?id=61552243900801&mibextid=ZbWKwL"
                                                        ><img
                                                          src="https://feyrwev.stripocdn.email/content/assets/img/social-icons/circle-colored/facebook-circle-colored.png"
                                                          alt="Fb"
                                                          title="Facebook"
                                                          width="24"
                                                      /></a>
                                                    </td>
                                                    <td
                                                      align="center"
                                                      valign="top"
                                                      class="es-p20r"
                                                    >
                                                      <a
                                                        target="_blank"
                                                        href="https://www.instagram.com/musafirmahal?igshid=NjIwNzIyMDk2Mg%3D%3D"
                                                        ><img
                                                          src="https://feyrwev.stripocdn.email/content/assets/img/social-icons/circle-colored/instagram-circle-colored.png"
                                                          alt="Ig"
                                                          title="Instagram"
                                                          width="24"
                                                      /></a>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <!--[if mso]></td></tr></table><![endif]-->
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                class="es-content"
                cellspacing="0"
                cellpadding="0"
                align="center"
              >
                <tbody>
                  <tr>
                    <td class="esd-stripe" align="center" bgcolor="transparent">
                      <table
                        class="es-content-body"
                        width="600"
                        cellpadding="0"
                        cellspacing="0"
                        bgcolor="#fffdf7"
                        align="center"
                      >
                        <tbody>
                          <tr>
                            <td
                              class="esd-structure es-p20t es-p20r es-p20l es-m-p15t es-m-p55b"
                              align="left"
                            >
                              <table cellpadding="0" cellspacing="0">
                                <tbody>
                                  <tr>
                                    <td
                                      width="560"
                                      class="esd-container-frame"
                                      align="left"
                                    >
                                      <table
                                        cellpadding="0"
                                        cellspacing="0"
                                        width="100%"
                                        role="presentation"
                                      >
                                        <tbody>
                                          <tr>
                                            <td
                                              align="center"
                                              class="esd-empty-container"
                                              style="display: none"
                                            ></td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                cellpadding="0"
                cellspacing="0"
                class="es-footer"
                align="center"
              >
                <tbody>
                  <tr>
                    <td class="esd-stripe" align="center">
                      <table
                        class="es-footer-body"
                        width="600"
                        cellspacing="0"
                        cellpadding="0"
                        bgcolor="#ffffff"
                        align="center"
                      >
                        <tbody></tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </body>
</html>

`;
  return email;
}

module.exports = Email;
