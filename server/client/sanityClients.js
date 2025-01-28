const config = {
  projectId: '477d75bp',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-01-01',
  token:
    'skAXoXVdIDuA1kHjFO2D6Hzy8YGaf8pOpsIcyi5IgUdQxd05zt2v0fnsrdSmo8fqp2ifx6O59TnLNnoSETgtue0TgxovOmYGsIx2hz44Nra3ciuLE0EkzXJMnDQAr7uKKOq4fJ2lDp5mfgSVWgWYoXYynG4cm162RlJMx1RVZcOWi1TpaGOl',
}

const query = encodeURIComponent(
  `*[_type == "predictA"][0]{
    betContainerTitle,
    copyText,
    tableRows
  }`,
)

const queryB = encodeURIComponent(
  `*[_type == "predictB"][0]{
    betContainerTitle,
    copyText,
    tableRows
  }`,
)

const queryC = encodeURIComponent(
  `*[_type == "predictC"][0]{
    betContainerTitle,
    copyText,
    tableRows
  }`,
)

const queryD = encodeURIComponent(
  `*[_type == "predictD"][0]{
    betContainerTitle,
    copyText,
    tableRows
  }`,
)

const rolloverQuery = encodeURIComponent(
  `*[_type == "rollover"][0]{
    rolloverTitle,
    "rolloverImageUrl": rolloverImage.asset->url,
    tableHeaders,
    tableRows
  }`,
)

const url = `https://${config.projectId}.api.sanity.io/v2023-01-01/data/query/${config.dataset}?query=${query}`
const urlB = `https://${config.projectId}.api.sanity.io/v2023-01-01/data/query/${config.dataset}?query=${queryB}`
const urlC = `https://${config.projectId}.api.sanity.io/v2023-01-01/data/query/${config.dataset}?query=${queryC}`
const urlD = `https://${config.projectId}.api.sanity.io/v2023-01-01/data/query/${config.dataset}?query=${queryD}`

const rolloverUrl = `https://${config.projectId}.api.sanity.io/v2023-01-01/data/query/${config.dataset}?query=${rolloverQuery}`

fetch(url, {
  headers: {
    Authorization: `Bearer ${config.token}`,
  },
})
  .then((response) => response.json())
  .then((data) => {
    const result = data.result
    // console.log(result)

    // Update bet container title and copy section
    document.querySelector('.betContainer h1').innerHTML = `
      ${result.betContainerTitle}
      <div class="copy-section">
        <span id="copy-text">${result.copyText}</span>
        <button onclick="copyToClipboard('copy-text', 'copy-message')">
          <i
            class="fa fa-copy copy-icon"
            onmouseover="this.style.backgroundColor='#e0e0e0'; this.style.color='#FFD700';"
            onmouseout="this.style.backgroundColor='#f9f9f9'; this.style.color='#202833';"
          ></i>
        </button>
        <span id="copy-message" class="popup-message" style="display: none; color: green">
          code copied!
        </span>
      </div>
    `

    // Populate table rows
    const tableBody = document.querySelector('.numbered-table tbody')
    tableBody.innerHTML = result.tableRows
      .map(
        (row, index) => `
        <tr>
          <td></td>
          <td>${row.league}<br />(<span>${row.country}</span>)</td>
          <td>${row.team1}<br />vs<br />${row.team2}</td>
          <td>${row.tips}<br />(<span>${row.context}</span>)</td>
          <td>
            <input
              type="checkbox"
              class="readonly-checkbox"
              name="bet_checkbox"
              value="${index + 1}"
              ${row.result ? 'checked' : ''}
              disabled
            />
          </td>
        </tr>`,
      )
      .join('')
  })
  .catch((error) => console.error('Error fetching data:', error))

// Prediction Section B

fetch(urlB, {
  headers: {
    Authorization: `Bearer ${config.token}`,
  },
})
  .then((response) => response.json())
  .then((data) => {
    const result = data.result
    // console.log(result)

    // Update bet container title and copy section
    document.querySelector('.betContainer_1 h1').innerHTML = `
      ${result.betContainerTitle}
      <div class="copy-section_1">
        <span id="copy-text_1">${result.copyText}</span>
        <button onclick="copyToClipboard('copy-text_1', 'copy-message_1')">
          <i
            class="fa fa-copy copy-icon"
            onmouseover="this.style.backgroundColor='#e0e0e0'; this.style.color='#FFD700';"
            onmouseout="this.style.backgroundColor='#f9f9f9'; this.style.color='#202833';"
          ></i>
        </button>
        <span id="copy-message_1" class="popup-message" style="display: none; color: green">
          code copied!
        </span>
      </div>
    `

    // Populate table rows
    const tableBody = document.querySelector('.numbered-table tbody')
    tableBody.innerHTML = result.tableRows
      .map(
        (row, index) => `
        <tr>
          <td></td>
          <td>${row.league}<br />(<span>${row.country}</span>)</td>
          <td>${row.team1}<br />vs<br />${row.team2}</td>
          <td>${row.tips}<br />(<span>${row.context}</span>)</td>
          <td>
            <input
              type="checkbox"
              class="readonly-checkbox"
              name="bet_checkbox"
              value="${index + 1}"
              ${row.result ? 'checked' : ''}
              disabled
            />
          </td>
        </tr>`,
      )
      .join('')
  })
  .catch((error) => console.error('Error fetching data:', error))

// prediction  C

fetch(urlC, {
  headers: {
    Authorization: `Bearer ${config.token}`,
  },
})
  .then((response) => response.json())
  .then((data) => {
    const result = data.result
    // console.log(result)

    // Update bet container title and copy section
    document.querySelector('.betContainer_2 h1').innerHTML = `
        ${result.betContainerTitle}
        <div class="copy-section_2">
          <span id="copy-text_2">${result.copyText}</span>
          <button onclick="copyToClipboard('copy-text_2', 'copy-message_2')">
            <i
              class="fa fa-copy copy-icon"
              onmouseover="this.style.backgroundColor='#e0e0e0'; this.style.color='#FFD700';"
              onmouseout="this.style.backgroundColor='#f9f9f9'; this.style.color='#202833';"
            ></i>
          </button>
          <span id="copy-message_2" class="popup-message" style="display: none; color: green">
            code copied!
          </span>
        </div>
      `

    // Populate table rows
    const tableBody = document.querySelector('.predictC')
    tableBody.innerHTML = result.tableRows
      .map(
        (row, index) => `
          <tr>
            <td></td>
            <td>${row.league}<br />(<span>${row.country}</span>)</td>
            <td>${row.team1}<br />vs<br />${row.team2}</td>
            <td>${row.tips}<br />(<span>${row.context}</span>)</td>
            <td>
              <input
                type="checkbox"
                class="readonly-checkbox"
                name="bet_checkbox"
                value="${index + 1}"
                ${row.result ? 'checked' : ''}
                disabled
              />
            </td>
          </tr>`,
      )
      .join('')
  })
  .catch((error) => console.error('Error fetching data:', error))

// Prediction Section B

fetch(urlD, {
  headers: {
    Authorization: `Bearer ${config.token}`,
  },
})
  .then((response) => response.json())
  .then((data) => {
    const result = data.result
    // console.log(result)

    // Update bet container title and copy section
    document.querySelector('.betContainer_3 h1').innerHTML = `
      ${result.betContainerTitle}
      <div class="copy-section_3">
        <span id="copy-text_3">${result.copyText}</span>
        <button onclick="copyToClipboard('copy-text_3', 'copy-message_3')">
          <i
            class="fa fa-copy copy-icon"
            onmouseover="this.style.backgroundColor='#e0e0e0'; this.style.color='#FFD700';"
            onmouseout="this.style.backgroundColor='#f9f9f9'; this.style.color='#202833';"
          ></i>
        </button>
        <span id="copy-message_3" class="popup-message" style="display: none; color: green">
          code copied!
        </span>
      </div>
    `

    // Populate table rows
    const tableBody = document.querySelector('.predictD')
    tableBody.innerHTML = result.tableRows
      .map(
        (row, index) => `
        <tr>
          <td></td>
          <td>${row.league}<br />(<span>${row.country}</span>)</td>
          <td>${row.team1}<br />vs<br />${row.team2}</td>
          <td>${row.tips}<br />(<span>${row.context}</span>)</td>
          <td>
            <input
              type="checkbox"
              class="readonly-checkbox"
              name="bet_checkbox"
              value="${index + 1}"
              ${row.result ? 'checked' : ''}
              disabled
            />
          </td>
        </tr>`,
      )
      .join('')
  })
  .catch((error) => console.error('Error fetching data:', error))

// Fetch RollOver data
fetch(rolloverUrl, {
  headers: {
    Authorization: `Bearer ${config.token}`,
  },
})
  .then((response) => response.json())
  .then((data) => {
    const result = data.result

    // Populate RollOver table rows
    const rolloverTableBody = document.querySelector('.styled-table tbody')
    rolloverTableBody.innerHTML = result.tableRows
      .map(
        (row, index) => `
        <tr>
          <td>${row.day}.</td>
          <td>${row.bookingCode}</td>
          <td>
            <input
              type="checkbox"
              class="readonly-checkbox"
              name="bet_checkbox"
              value="${index + 1}"
              ${row.result ? 'checked' : ''}
              disabled
            />
          </td>
        </tr>`,
      )
      .join('')
  })
  .catch((error) => console.error('Error fetching RollOver data:', error))
