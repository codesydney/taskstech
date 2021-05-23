import React from 'react'

function Logo() {
    return (
        <>
             <svg
          width="100vw"
          height="150"
          viewBox="0 0 500 150"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="32"
            y="18"
            width="114"
            height="114"
          >
            <path
              d="M89 18.3596C88.0734 18.3596 87.1469 18.3831 86.2203 18.4284C85.2953 18.4737 84.3702 18.5409 83.4485 18.633C82.5249 18.7238 81.6062 18.8363 80.6891 18.9722C79.7718 19.1081 78.8594 19.2675 77.9499 19.4487C77.0406 19.6284 76.136 19.8315 75.2375 20.0565C74.339 20.283 73.4453 20.5299 72.5577 20.7987C71.6703 21.0675 70.7906 21.3581 69.9188 21.6705C69.0453 21.9831 68.1812 22.3158 67.325 22.6706C66.4688 23.0253 65.6202 23.4018 64.7828 23.7971C63.9453 24.194 63.1172 24.6113 62.3 25.0472C61.4828 25.4846 60.6765 25.9409 59.8812 26.4174C59.0859 26.894 58.3031 27.3909 57.5328 27.905C56.7609 28.4205 56.0031 28.9533 55.2594 29.5065C54.5141 30.0581 53.7843 30.6284 53.0672 31.2159C52.3515 31.805 51.65 32.4096 50.9625 33.033C50.2749 33.6549 49.6047 34.2941 48.9485 34.9487C48.2937 35.6049 47.6547 36.2753 47.0328 36.9627C46.4094 37.6503 45.8046 38.3519 45.2156 39.0675C44.6282 39.7847 44.0577 40.5143 43.5062 41.2596C42.9531 42.0033 42.4203 42.7613 41.9046 43.533C41.3906 44.3034 40.8938 45.0863 40.4172 45.8816C39.9407 46.6769 39.4844 47.4831 39.0468 48.3003C38.6109 49.1175 38.1938 49.9455 37.7969 50.7831C37.4015 51.6206 37.025 52.469 36.6702 53.3253C36.3156 54.1815 35.9828 55.0455 35.6703 55.919C35.3577 56.7909 35.0672 57.6705 34.7984 58.5581C34.5297 59.4456 34.2828 60.3378 34.0562 61.2378C33.8312 62.1362 33.6281 63.0408 33.4484 63.9503C33.2672 64.8596 33.1077 65.7722 32.9718 66.6893C32.8359 67.6065 32.7234 68.5253 32.6328 69.4487C32.5406 70.3706 32.4734 71.2956 32.4281 72.2205C32.3828 73.1471 32.3594 74.0738 32.3594 75.0003C32.3594 75.9269 32.3828 76.8534 32.4281 77.78C32.4734 78.705 32.5406 79.6299 32.6328 80.5518C32.7234 81.4752 32.8359 82.394 32.9718 83.3112C33.1077 84.2283 33.2672 85.1409 33.4484 86.0502C33.6281 86.9597 33.8312 87.8643 34.0562 88.7628C34.2828 89.6612 34.5297 90.555 34.7984 91.4424C35.0672 92.3283 35.3577 93.2096 35.6703 94.0815C35.9828 94.955 36.3156 95.819 36.6702 96.6753C37.025 97.5315 37.4015 98.3799 37.7969 99.2175C38.1938 100.055 38.6109 100.883 39.0468 101.7C39.4844 102.518 39.9407 103.324 40.4172 104.119C40.8938 104.914 41.3906 105.697 41.9046 106.467C42.4203 107.239 42.9531 107.997 43.5062 108.741C44.0577 109.486 44.6282 110.216 45.2156 110.933C45.8046 111.649 46.4094 112.35 47.0328 113.038C47.6547 113.725 48.2937 114.396 48.9485 115.052C49.6047 115.707 50.2749 116.346 50.9625 116.967C51.65 117.591 52.3515 118.196 53.0672 118.785C53.7843 119.372 54.5141 119.942 55.2594 120.494C56.0031 121.047 56.7609 121.58 57.5328 122.096C58.3031 122.61 59.0859 123.107 59.8812 123.583C60.6765 124.06 61.4828 124.516 62.3 124.953C63.1172 125.389 63.9453 125.807 64.7828 126.203C65.6202 126.599 66.4688 126.975 67.325 127.33C68.1812 127.685 69.0453 128.017 69.9188 128.33C70.7906 128.642 71.6703 128.933 72.5577 129.202C73.4453 129.471 74.339 129.717 75.2375 129.944C76.136 130.169 77.0406 130.372 77.9499 130.552C78.8594 130.733 79.7718 130.892 80.6891 131.028C81.6062 131.164 82.5249 131.277 83.4485 131.367C84.3702 131.46 85.2953 131.527 86.2203 131.572C87.1469 131.617 88.0734 131.641 89 131.641C89.9265 131.641 90.8531 131.617 91.7796 131.572C92.7047 131.527 93.6297 131.46 94.5515 131.367C95.475 131.277 96.3938 131.164 97.3109 131.028C98.2281 130.892 99.1406 130.733 100.05 130.552C100.959 130.372 101.864 130.169 102.762 129.944C103.661 129.717 104.555 129.471 105.442 129.202C106.328 128.933 107.209 128.642 108.081 128.33C108.955 128.017 109.819 127.685 110.675 127.33C111.531 126.975 112.38 126.599 113.217 126.203C114.055 125.807 114.883 125.389 115.7 124.953C116.517 124.516 117.323 124.06 118.119 123.583C118.914 123.107 119.697 122.61 120.467 122.096C121.239 121.58 121.997 121.047 122.741 120.494C123.486 119.942 124.216 119.372 124.933 118.785C125.648 118.196 126.35 117.591 127.037 116.967C127.725 116.346 128.395 115.707 129.051 115.052C129.706 114.396 130.345 113.725 130.967 113.038C131.591 112.35 132.195 111.649 132.784 110.933C133.372 110.216 133.942 109.486 134.494 108.741C135.047 107.997 135.58 107.239 136.095 106.467C136.609 105.697 137.106 104.914 137.583 104.119C138.059 103.324 138.516 102.518 138.953 101.7C139.389 100.883 139.806 100.055 140.203 99.2175C140.598 98.3799 140.975 97.5315 141.33 96.6753C141.684 95.819 142.017 94.955 142.33 94.0815C142.642 93.2096 142.933 92.3283 143.202 91.4424C143.47 90.555 143.717 89.6612 143.944 88.7628C144.169 87.8643 144.372 86.9597 144.552 86.0502C144.733 85.1409 144.892 84.2283 145.028 83.3112C145.164 82.394 145.277 81.4752 145.367 80.5518C145.459 79.6299 145.527 78.705 145.572 77.78C145.617 76.8534 145.641 75.9269 145.641 75.0003C145.641 74.0738 145.617 73.1471 145.572 72.2205C145.527 71.2956 145.459 70.3706 145.367 69.4487C145.277 68.5253 145.164 67.6065 145.028 66.6893C144.892 65.7722 144.733 64.8596 144.552 63.9503C144.372 63.0408 144.169 62.1362 143.944 61.2378C143.717 60.3378 143.47 59.4456 143.202 58.5581C142.933 57.6705 142.642 56.7909 142.33 55.919C142.017 55.0455 141.684 54.1815 141.33 53.3253C140.975 52.469 140.598 51.6206 140.203 50.7831C139.806 49.9455 139.389 49.1175 138.953 48.3003C138.516 47.4831 138.059 46.6769 137.583 45.8816C137.106 45.0863 136.609 44.3034 136.095 43.533C135.58 42.7613 135.047 42.0033 134.494 41.2596C133.942 40.5143 133.372 39.7847 132.784 39.0675C132.195 38.3519 131.591 37.6503 130.967 36.9627C130.345 36.2753 129.706 35.6049 129.051 34.9487C128.395 34.2941 127.725 33.6549 127.037 33.033C126.35 32.4096 125.648 31.805 124.933 31.2159C124.216 30.6284 123.486 30.0581 122.741 29.5065C121.997 28.9533 121.239 28.4205 120.467 27.905C119.697 27.3909 118.914 26.894 118.119 26.4174C117.323 25.9409 116.517 25.4846 115.7 25.0472C114.883 24.6113 114.055 24.194 113.217 23.7971C112.38 23.4018 111.531 23.0253 110.675 22.6706C109.819 22.3158 108.955 21.9831 108.081 21.6705C107.209 21.3581 106.328 21.0675 105.442 20.7987C104.555 20.5299 103.661 20.283 102.762 20.0565C101.864 19.8315 100.959 19.6284 100.05 19.4487C99.1406 19.2675 98.2281 19.1081 97.3109 18.9722C96.3938 18.8363 95.475 18.7238 94.5515 18.633C93.6297 18.5409 92.7047 18.4737 91.7796 18.4284C90.8531 18.3831 89.9265 18.3596 89 18.3596Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask0)">
            <path
              d="M89 18.3596C88.0734 18.3596 87.1469 18.3831 86.2203 18.4284C85.2953 18.4737 84.3702 18.5409 83.4485 18.633C82.5249 18.7238 81.6062 18.8363 80.6891 18.9722C79.7718 19.1081 78.8594 19.2675 77.9499 19.4487C77.0406 19.6284 76.136 19.8315 75.2375 20.0565C74.339 20.283 73.4453 20.5299 72.5577 20.7987C71.6703 21.0675 70.7906 21.3581 69.9188 21.6705C69.0453 21.9831 68.1812 22.3158 67.325 22.6706C66.4688 23.0253 65.6202 23.4018 64.7828 23.7971C63.9453 24.194 63.1172 24.6113 62.3 25.0472C61.4828 25.4846 60.6765 25.9409 59.8812 26.4174C59.0859 26.894 58.3031 27.3909 57.5328 27.905C56.7609 28.4205 56.0031 28.9533 55.2594 29.5065C54.5141 30.0581 53.7843 30.6284 53.0672 31.2159C52.3515 31.805 51.65 32.4096 50.9625 33.033C50.2749 33.6549 49.6047 34.2941 48.9485 34.9487C48.2937 35.6049 47.6547 36.2753 47.0328 36.9627C46.4094 37.6503 45.8046 38.3519 45.2156 39.0675C44.6282 39.7847 44.0577 40.5143 43.5062 41.2596C42.9531 42.0033 42.4203 42.7613 41.9046 43.533C41.3906 44.3034 40.8938 45.0863 40.4172 45.8816C39.9407 46.6769 39.4844 47.4831 39.0468 48.3003C38.6109 49.1175 38.1938 49.9455 37.7969 50.7831C37.4015 51.6206 37.025 52.469 36.6702 53.3253C36.3156 54.1815 35.9828 55.0455 35.6703 55.919C35.3577 56.7909 35.0672 57.6705 34.7984 58.5581C34.5297 59.4456 34.2828 60.3378 34.0562 61.2378C33.8312 62.1362 33.6281 63.0408 33.4484 63.9503C33.2672 64.8596 33.1077 65.7722 32.9718 66.6893C32.8359 67.6065 32.7234 68.5253 32.6328 69.4487C32.5406 70.3706 32.4734 71.2956 32.4281 72.2205C32.3828 73.1471 32.3594 74.0738 32.3594 75.0003C32.3594 75.9269 32.3828 76.8534 32.4281 77.78C32.4734 78.705 32.5406 79.6299 32.6328 80.5518C32.7234 81.4752 32.8359 82.394 32.9718 83.3112C33.1077 84.2283 33.2672 85.1409 33.4484 86.0502C33.6281 86.9597 33.8312 87.8643 34.0562 88.7628C34.2828 89.6612 34.5297 90.555 34.7984 91.4424C35.0672 92.3283 35.3577 93.2096 35.6703 94.0815C35.9828 94.955 36.3156 95.819 36.6702 96.6753C37.025 97.5315 37.4015 98.3799 37.7969 99.2175C38.1938 100.055 38.6109 100.883 39.0468 101.7C39.4844 102.518 39.9407 103.324 40.4172 104.119C40.8938 104.914 41.3906 105.697 41.9046 106.467C42.4203 107.239 42.9531 107.997 43.5062 108.741C44.0577 109.486 44.6282 110.216 45.2156 110.933C45.8046 111.649 46.4094 112.35 47.0328 113.038C47.6547 113.725 48.2937 114.396 48.9485 115.052C49.6047 115.707 50.2749 116.346 50.9625 116.967C51.65 117.591 52.3515 118.196 53.0672 118.785C53.7843 119.372 54.5141 119.942 55.2594 120.494C56.0031 121.047 56.7609 121.58 57.5328 122.096C58.3031 122.61 59.0859 123.107 59.8812 123.583C60.6765 124.06 61.4828 124.516 62.3 124.953C63.1172 125.389 63.9453 125.807 64.7828 126.203C65.6202 126.599 66.4688 126.975 67.325 127.33C68.1812 127.685 69.0453 128.017 69.9188 128.33C70.7906 128.642 71.6703 128.933 72.5577 129.202C73.4453 129.471 74.339 129.717 75.2375 129.944C76.136 130.169 77.0406 130.372 77.9499 130.552C78.8594 130.733 79.7718 130.892 80.6891 131.028C81.6062 131.164 82.5249 131.277 83.4485 131.367C84.3702 131.46 85.2953 131.527 86.2203 131.572C87.1469 131.617 88.0734 131.641 89 131.641C89.9265 131.641 90.8531 131.617 91.7796 131.572C92.7047 131.527 93.6297 131.46 94.5515 131.367C95.475 131.277 96.3938 131.164 97.3109 131.028C98.2281 130.892 99.1406 130.733 100.05 130.552C100.959 130.372 101.864 130.169 102.762 129.944C103.661 129.717 104.555 129.471 105.442 129.202C106.328 128.933 107.209 128.642 108.081 128.33C108.955 128.017 109.819 127.685 110.675 127.33C111.531 126.975 112.38 126.599 113.217 126.203C114.055 125.807 114.883 125.389 115.7 124.953C116.517 124.516 117.323 124.06 118.119 123.583C118.914 123.107 119.697 122.61 120.467 122.096C121.239 121.58 121.997 121.047 122.741 120.494C123.486 119.942 124.216 119.372 124.933 118.785C125.648 118.196 126.35 117.591 127.037 116.967C127.725 116.346 128.395 115.707 129.051 115.052C129.706 114.396 130.345 113.725 130.967 113.038C131.591 112.35 132.195 111.649 132.784 110.933C133.372 110.216 133.942 109.486 134.494 108.741C135.047 107.997 135.58 107.239 136.095 106.467C136.609 105.697 137.106 104.914 137.583 104.119C138.059 103.324 138.516 102.518 138.953 101.7C139.389 100.883 139.806 100.055 140.203 99.2175C140.598 98.3799 140.975 97.5315 141.33 96.6753C141.684 95.819 142.017 94.955 142.33 94.0815C142.642 93.2096 142.933 92.3283 143.202 91.4424C143.47 90.555 143.717 89.6612 143.944 88.7628C144.169 87.8643 144.372 86.9597 144.552 86.0502C144.733 85.1409 144.892 84.2283 145.028 83.3112C145.164 82.394 145.277 81.4752 145.367 80.5518C145.459 79.6299 145.527 78.705 145.572 77.78C145.617 76.8534 145.641 75.9269 145.641 75.0003C145.641 74.0738 145.617 73.1471 145.572 72.2205C145.527 71.2956 145.459 70.3706 145.367 69.4487C145.277 68.5253 145.164 67.6065 145.028 66.6893C144.892 65.7722 144.733 64.8596 144.552 63.9503C144.372 63.0408 144.169 62.1362 143.944 61.2378C143.717 60.3378 143.47 59.4456 143.202 58.5581C142.933 57.6705 142.642 56.7909 142.33 55.919C142.017 55.0455 141.684 54.1815 141.33 53.3253C140.975 52.469 140.598 51.6206 140.203 50.7831C139.806 49.9455 139.389 49.1175 138.953 48.3003C138.516 47.4831 138.059 46.6769 137.583 45.8816C137.106 45.0863 136.609 44.3034 136.095 43.533C135.58 42.7613 135.047 42.0033 134.494 41.2596C133.942 40.5143 133.372 39.7847 132.784 39.0675C132.195 38.3519 131.591 37.6503 130.967 36.9627C130.345 36.2753 129.706 35.6049 129.051 34.9487C128.395 34.2941 127.725 33.6549 127.037 33.033C126.35 32.4096 125.648 31.805 124.933 31.2159C124.216 30.6284 123.486 30.0581 122.741 29.5065C121.997 28.9533 121.239 28.4205 120.467 27.905C119.697 27.3909 118.914 26.894 118.119 26.4174C117.323 25.9409 116.517 25.4846 115.7 25.0472C114.883 24.6113 114.055 24.194 113.217 23.7971C112.38 23.4018 111.531 23.0253 110.675 22.6706C109.819 22.3158 108.955 21.9831 108.081 21.6705C107.209 21.3581 106.328 21.0675 105.442 20.7987C104.555 20.5299 103.661 20.283 102.762 20.0565C101.864 19.8315 100.959 19.6284 100.05 19.4487C99.1406 19.2675 98.2281 19.1081 97.3109 18.9722C96.3938 18.8363 95.475 18.7238 94.5515 18.633C93.6297 18.5409 92.7047 18.4737 91.7796 18.4284C90.8531 18.3831 89.9265 18.3596 89 18.3596Z"
              fill="#4E49F2"
            />
            <path
              d="M110.37 59.379L109.012 60.6722H110.888H132.314C134.21 60.6722 136.031 62.252 136.724 64.2108C137.387 66.0908 136.783 68.3697 135.252 69.6078L135.251 69.6081L67.9311 124.128C67.0802 124.817 66.0452 125.15 64.9968 125.15C63.9332 125.15 62.8548 124.756 61.9752 124.012C60.266 122.565 59.8208 120.043 60.9222 118.087L60.9225 118.086L79.1492 85.6458L79.3767 85.2408L79.1526 84.9114C79.1414 84.8748 79.1304 84.8342 79.1157 84.78C79.1117 84.7653 79.1075 84.7496 79.103 84.7328C79.0856 84.6693 79.0583 84.5694 79.0253 84.4823C79.0104 84.443 78.9786 84.3629 78.9249 84.2805C78.8981 84.2394 78.8451 84.1653 78.759 84.0947C78.6714 84.0228 78.504 83.9192 78.2703 83.9192H57.3656C55.5546 83.9192 53.9511 83.0163 53.177 81.4554C52.3904 79.8648 52.5675 78.0944 53.6436 76.6812L53.645 76.6794L84.6015 35.7685C84.6017 35.7684 84.6018 35.7681 84.6021 35.7678C85.5762 34.4881 86.9787 33.452 88.3218 33.452H125.37C127.212 33.452 128.959 34.8091 129.701 36.6252C130.422 38.4007 129.985 40.677 128.639 41.9916C128.638 41.9925 128.637 41.9934 128.636 41.9945L110.37 59.379ZM79.1651 84.9482C79.1649 84.9479 79.164 84.9456 79.1625 84.9413C79.1645 84.9462 79.1654 84.9486 79.1651 84.9482Z"
              fill="#FFC107"
              stroke="white"
            />
          </g>
          <path
            d="M175.321 102C174.887 102 174.497 101.848 174.151 101.545C173.847 101.198 173.696 100.808 173.696 100.375V66.705H162.126C161.692 66.705 161.302 66.5533 160.956 66.25C160.652 65.9033 160.501 65.5133 160.501 65.08V58.125C160.501 57.6483 160.652 57.2583 160.956 56.955C161.302 56.6517 161.692 56.5 162.126 56.5H197.096C197.572 56.5 197.962 56.6517 198.266 56.955C198.569 57.2583 198.721 57.6483 198.721 58.125V65.08C198.721 65.5567 198.569 65.9467 198.266 66.25C197.962 66.5533 197.572 66.705 197.096 66.705H185.526V100.375C185.526 100.808 185.374 101.198 185.071 101.545C184.767 101.848 184.377 102 183.901 102H175.321ZM208.34 102.65C206.044 102.65 203.942 102.217 202.035 101.35C200.172 100.44 198.699 99.2267 197.615 97.71C196.575 96.15 196.055 94.4383 196.055 92.575C196.055 89.585 197.269 87.18 199.695 85.36C202.165 83.54 205.545 82.2833 209.835 81.59L217.96 80.355V79.445C217.96 77.7983 217.614 76.585 216.92 75.805C216.227 75.025 215.057 74.635 213.41 74.635C212.414 74.635 211.59 74.8083 210.94 75.155C210.29 75.5017 209.619 75.9783 208.925 76.585C208.319 77.105 207.864 77.4517 207.56 77.625C207.43 77.9717 207.192 78.145 206.845 78.145H199.76C199.327 78.145 198.959 78.015 198.655 77.755C198.395 77.4517 198.287 77.105 198.33 76.715C198.374 75.545 198.937 74.245 200.02 72.815C201.147 71.385 202.837 70.15 205.09 69.11C207.387 68.07 210.204 67.55 213.54 67.55C218.87 67.55 222.814 68.7417 225.37 71.125C227.927 73.465 229.205 76.6283 229.205 80.615V100.375C229.205 100.808 229.054 101.198 228.75 101.545C228.447 101.848 228.057 102 227.58 102H220.04C219.607 102 219.217 101.848 218.87 101.545C218.567 101.198 218.415 100.808 218.415 100.375V98.1C217.462 99.4433 216.119 100.548 214.385 101.415C212.695 102.238 210.68 102.65 208.34 102.65ZM211.395 95.24C213.389 95.24 214.992 94.59 216.205 93.29C217.462 91.99 218.09 90.0833 218.09 87.57V86.66L212.565 87.635C208.665 88.3283 206.715 89.6933 206.715 91.73C206.715 92.8133 207.17 93.68 208.08 94.33C208.99 94.9367 210.095 95.24 211.395 95.24ZM250.45 102.65C246.94 102.65 243.993 102.152 241.61 101.155C239.27 100.158 237.537 98.9667 236.41 97.58C235.283 96.1933 234.72 94.9583 234.72 93.875C234.72 93.4417 234.872 93.095 235.175 92.835C235.522 92.5317 235.89 92.38 236.28 92.38H243.69C243.95 92.38 244.188 92.4883 244.405 92.705C244.925 93.0517 245.315 93.3333 245.575 93.55C246.528 94.2433 247.352 94.7633 248.045 95.11C248.782 95.4133 249.67 95.565 250.71 95.565C251.967 95.565 252.985 95.3267 253.765 94.85C254.588 94.33 255 93.615 255 92.705C255 91.9683 254.783 91.3833 254.35 90.95C253.96 90.5167 253.18 90.105 252.01 89.715C250.84 89.2817 249.063 88.8267 246.68 88.35C243.083 87.6133 240.31 86.4217 238.36 84.775C236.453 83.085 235.5 80.8317 235.5 78.015C235.5 76.2383 236.063 74.5483 237.19 72.945C238.317 71.3417 239.985 70.0417 242.195 69.045C244.448 68.0483 247.113 67.55 250.19 67.55C253.267 67.55 255.953 68.0267 258.25 68.98C260.547 69.9333 262.28 71.1033 263.45 72.49C264.663 73.8333 265.27 75.0683 265.27 76.195C265.27 76.585 265.118 76.9317 264.815 77.235C264.555 77.5383 264.23 77.69 263.84 77.69H257.08C256.733 77.69 256.408 77.5817 256.105 77.365C255.542 77.0617 255.043 76.7367 254.61 76.39C253.873 75.8267 253.18 75.3933 252.53 75.09C251.88 74.7867 251.078 74.635 250.125 74.635C248.998 74.635 248.088 74.895 247.395 75.415C246.745 75.935 246.42 76.6067 246.42 77.43C246.42 78.08 246.593 78.6217 246.94 79.055C247.33 79.4883 248.11 79.9217 249.28 80.355C250.493 80.745 252.27 81.1567 254.61 81.59C258.813 82.3267 261.868 83.6267 263.775 85.49C265.725 87.3533 266.7 89.5417 266.7 92.055C266.7 95.2617 265.27 97.84 262.41 99.79C259.55 101.697 255.563 102.65 250.45 102.65ZM274.093 102C273.659 102 273.269 101.848 272.923 101.545C272.619 101.198 272.468 100.808 272.468 100.375V57.475C272.468 56.9983 272.619 56.6083 272.923 56.305C273.269 56.0017 273.659 55.85 274.093 55.85H281.633C282.109 55.85 282.499 56.0017 282.803 56.305C283.106 56.6083 283.258 56.9983 283.258 57.475V79.25L292.293 69.305C292.379 69.2183 292.531 69.0667 292.748 68.85C293.008 68.6333 293.268 68.4817 293.528 68.395C293.788 68.265 294.091 68.2 294.438 68.2H303.148C303.538 68.2 303.863 68.3517 304.123 68.655C304.426 68.915 304.578 69.24 304.578 69.63C304.578 70.1067 304.404 70.475 304.058 70.735L292.358 83.345L305.683 99.53C306.029 99.8767 306.203 100.202 306.203 100.505C306.203 100.938 306.051 101.307 305.748 101.61C305.488 101.87 305.141 102 304.708 102H295.803C295.239 102 294.806 101.913 294.503 101.74C294.243 101.567 293.918 101.285 293.528 100.895L283.258 88.545V100.375C283.258 100.808 283.106 101.198 282.803 101.545C282.499 101.848 282.109 102 281.633 102H274.093ZM323.702 102.65C320.192 102.65 317.245 102.152 314.862 101.155C312.522 100.158 310.789 98.9667 309.662 97.58C308.535 96.1933 307.972 94.9583 307.972 93.875C307.972 93.4417 308.124 93.095 308.427 92.835C308.774 92.5317 309.142 92.38 309.532 92.38H316.942C317.202 92.38 317.44 92.4883 317.657 92.705C318.177 93.0517 318.567 93.3333 318.827 93.55C319.78 94.2433 320.604 94.7633 321.297 95.11C322.034 95.4133 322.922 95.565 323.962 95.565C325.219 95.565 326.237 95.3267 327.017 94.85C327.84 94.33 328.252 93.615 328.252 92.705C328.252 91.9683 328.035 91.3833 327.602 90.95C327.212 90.5167 326.432 90.105 325.262 89.715C324.092 89.2817 322.315 88.8267 319.932 88.35C316.335 87.6133 313.562 86.4217 311.612 84.775C309.705 83.085 308.752 80.8317 308.752 78.015C308.752 76.2383 309.315 74.5483 310.442 72.945C311.569 71.3417 313.237 70.0417 315.447 69.045C317.7 68.0483 320.365 67.55 323.442 67.55C326.519 67.55 329.205 68.0267 331.502 68.98C333.799 69.9333 335.532 71.1033 336.702 72.49C337.915 73.8333 338.522 75.0683 338.522 76.195C338.522 76.585 338.37 76.9317 338.067 77.235C337.807 77.5383 337.482 77.69 337.092 77.69H330.332C329.985 77.69 329.66 77.5817 329.357 77.365C328.794 77.0617 328.295 76.7367 327.862 76.39C327.125 75.8267 326.432 75.3933 325.782 75.09C325.132 74.7867 324.33 74.635 323.377 74.635C322.25 74.635 321.34 74.895 320.647 75.415C319.997 75.935 319.672 76.6067 319.672 77.43C319.672 78.08 319.845 78.6217 320.192 79.055C320.582 79.4883 321.362 79.9217 322.532 80.355C323.745 80.745 325.522 81.1567 327.862 81.59C332.065 82.3267 335.12 83.6267 337.027 85.49C338.977 87.3533 339.952 89.5417 339.952 92.055C339.952 95.2617 338.522 97.84 335.662 99.79C332.802 101.697 328.815 102.65 323.702 102.65ZM352.611 102C352.177 102 351.787 101.848 351.441 101.545C351.137 101.198 350.986 100.808 350.986 100.375V66.705H339.416C338.982 66.705 338.592 66.5533 338.246 66.25C337.942 65.9033 337.791 65.5133 337.791 65.08V58.125C337.791 57.6483 337.942 57.2583 338.246 56.955C338.592 56.6517 338.982 56.5 339.416 56.5H374.386C374.862 56.5 375.252 56.6517 375.556 56.955C375.859 57.2583 376.011 57.6483 376.011 58.125V65.08C376.011 65.5567 375.859 65.9467 375.556 66.25C375.252 66.5533 374.862 66.705 374.386 66.705H362.816V100.375C362.816 100.808 362.664 101.198 362.361 101.545C362.057 101.848 361.667 102 361.191 102H352.611ZM391.09 102.65C385.89 102.65 381.795 101.242 378.805 98.425C375.815 95.6083 374.255 91.5133 374.125 86.14V83.865C374.299 78.7517 375.88 74.765 378.87 71.905C381.904 69.0017 385.955 67.55 391.025 67.55C394.709 67.55 397.807 68.3083 400.32 69.825C402.877 71.2983 404.784 73.335 406.04 75.935C407.34 78.535 407.99 81.525 407.99 84.905V86.465C407.99 86.8983 407.839 87.2883 407.535 87.635C407.232 87.9383 406.842 88.09 406.365 88.09H385.565V88.545C385.652 90.5817 386.15 92.2283 387.06 93.485C387.97 94.7417 389.292 95.37 391.025 95.37C392.109 95.37 392.997 95.1533 393.69 94.72C394.384 94.2433 395.012 93.68 395.575 93.03C395.965 92.5533 396.269 92.2717 396.485 92.185C396.745 92.055 397.135 91.99 397.655 91.99H405.715C406.105 91.99 406.43 92.12 406.69 92.38C406.994 92.5967 407.145 92.9 407.145 93.29C407.145 94.4167 406.495 95.7167 405.195 97.19C403.939 98.6633 402.097 99.9417 399.67 101.025C397.244 102.108 394.384 102.65 391.09 102.65ZM396.55 81.655V81.525C396.55 79.4017 396.052 77.7333 395.055 76.52C394.102 75.2633 392.759 74.635 391.025 74.635C389.335 74.635 387.992 75.2633 386.995 76.52C386.042 77.7333 385.565 79.4017 385.565 81.525V81.655H396.55ZM429.619 102.65C424.722 102.65 420.757 101.35 417.724 98.75C414.691 96.1067 413.066 92.445 412.849 87.765L412.784 85.165L412.849 82.5C413.022 77.82 414.626 74.1583 417.659 71.515C420.736 68.8717 424.722 67.55 429.619 67.55C433.302 67.55 436.401 68.2217 438.914 69.565C441.471 70.865 443.356 72.4467 444.569 74.31C445.826 76.13 446.497 77.7983 446.584 79.315C446.627 79.7483 446.476 80.1383 446.129 80.485C445.826 80.7883 445.436 80.94 444.959 80.94H436.704C436.227 80.94 435.859 80.8317 435.599 80.615C435.339 80.3983 435.101 80.0733 434.884 79.64C434.364 78.2967 433.692 77.3433 432.869 76.78C432.089 76.2167 431.071 75.935 429.814 75.935C426.261 75.935 424.419 78.2317 424.289 82.825L424.224 85.295L424.289 87.44C424.376 89.78 424.874 91.5133 425.784 92.64C426.737 93.7233 428.081 94.265 429.814 94.265C431.157 94.265 432.219 93.9833 432.999 93.42C433.779 92.8567 434.407 91.9033 434.884 90.56C435.101 90.1267 435.339 89.8017 435.599 89.585C435.859 89.3683 436.227 89.26 436.704 89.26H444.959C445.392 89.26 445.761 89.4117 446.064 89.715C446.411 89.975 446.584 90.3217 446.584 90.755C446.584 92.1417 445.977 93.7667 444.764 95.63C443.594 97.4933 441.731 99.14 439.174 100.57C436.617 101.957 433.432 102.65 429.619 102.65ZM454.049 102C453.616 102 453.226 101.848 452.879 101.545C452.576 101.198 452.424 100.808 452.424 100.375V57.475C452.424 56.9983 452.576 56.6083 452.879 56.305C453.226 56.0017 453.616 55.85 454.049 55.85H462.369C462.846 55.85 463.236 56.0017 463.539 56.305C463.842 56.6083 463.994 56.9983 463.994 57.475V71.97C466.594 69.0233 470.017 67.55 474.264 67.55C476.777 67.55 479.009 68.1133 480.959 69.24C482.952 70.3667 484.512 72.035 485.639 74.245C486.766 76.455 487.329 79.12 487.329 82.24V100.375C487.329 100.808 487.177 101.198 486.874 101.545C486.571 101.848 486.181 102 485.704 102H477.319C476.886 102 476.496 101.848 476.149 101.545C475.846 101.198 475.694 100.808 475.694 100.375V82.63C475.694 80.5933 475.196 79.0333 474.199 77.95C473.246 76.8233 471.837 76.26 469.974 76.26C468.111 76.26 466.637 76.8233 465.554 77.95C464.514 79.0333 463.994 80.5933 463.994 82.63V100.375C463.994 100.852 463.842 101.242 463.539 101.545C463.236 101.848 462.846 102 462.369 102H454.049Z"
            fill="white"
          />
        </svg>
        </>
    )
}

export default Logo
