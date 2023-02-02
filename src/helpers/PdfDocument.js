import { getLocales } from 'expo-localization'
import { manipulateAsync } from 'expo-image-manipulator'
import { i18n } from '../helpers/TranslationKeys'

i18n.locale = getLocales()[0].languageCode

export const generateHtml = async (userData) => {
  const image = await manipulateAsync(userData.imageUrl, [], { base64: true })

  return `
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
        <style>
          body {
            background-color: #063970;
            color: #d3d3d3;
          }
          h3 {
            color: yellow;
          }
          div {
            margin: 10px 0 10px 0;
          }
          .key {
            font-weight: bold;
          }
          .avatar {
            width: 100px;
            height: 100px;
          }
        </style>
      </head>
      <body>
        <h2>${i18n.t('showResumeHeadline')}</h2>

        <div>
          <h3>${i18n.t('headlinePersonalDetails')}</h3>
          <div>
            <img
              src="data:image/jpeg;base64,${image.base64}"
              class="avatar"
            />
          </div>
          <div>
            <span class="key">${i18n.t('name')}: </span>
            <span>${userData.fullName}</span>
          </div>

          <div>
            <span class="key">${i18n.t('professionalTitle')}: </span>
            <span>${userData.fullName}</span>
          </div>
        </div>

        <div>
          <h3>${i18n.t('headlineContactDetails')}</h3>
          <div>
            <span class="key">${i18n.t('phoneNumber')}: </span>
            <span>${userData.phoneNo}</span>
          </div>

          <div>
            <span class="key">${i18n.t('email')}: </span>
            <span>${userData.email}</span>
          </div>

          <div>
            <span class="key">${i18n.t('websiteLink')}: </span>
            <span>${userData.website}</span>
          </div>
        </div>

        <div>
          <h3>${i18n.t('headlineContactDetails')}</h3>
          <div>
            <span class="key">${i18n.t('company')}: </span>
            <span>${userData.company}</span>
          </div>

          <div>
            <span class="key">${i18n.t('role')}: </span>
            <span>${userData.jobTitle}</span>
          </div>

          <div>
            <span class="key">${i18n.t('startAndEndDates')}: </span>
            <span>${userData.jobStartDate} - ${userData.jobEndDate}</span>
          </div>

          <div>
            <span class="key">${i18n.t('jobExperience')}: </span>
            <span>${userData.experience}</span>
          </div>
        </div>

        <div>
          <h3>${i18n.t('headlineProfileDetails')}</h3>
          <div>
            <span class="key">${i18n.t('profileSummary')}: </span>
            <span>${userData.profSummary}</span>
          </div>

          <div>
            <span class="key">${i18n.t('certificate')}: </span>
            <span>${userData.certificate}</span>
          </div>

          <div>
            <span class="key">${i18n.t('collegeName')}: </span>
            <span>${userData.collegeName}</span>
          </div>

          <div>
            <span class="key">${i18n.t('startAndEndDates')}: </span>
            <span>${userData.colStartDate} - ${userData.colEndDate}</span>
          </div>

          <div>
            <span class="key">${i18n.t('skill')}: </span>
            <span>${userData.skill}</span>
          </div>

          <div>
            <span class="key">${i18n.t('hobby')}: </span>
            <span>${userData.hobby}</span>
          </div>
        </div>
      </body>
    </html>
  `
}
