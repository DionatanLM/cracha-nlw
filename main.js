const LinksSocialMedia = {
  github: 'DionatanLM',
  youtube: 'UCe0WDjk6_ZmOor33h5X2Eyg',
  facebook: 'dionatan.delimamoreira',
  instagram: 'dionatan.lm',
  twitter: 'dionatan_lm'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      Username.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
