import React from 'react'
import { Box } from 'theme-ui'

const Logo = ({ ...props }) => {
  return (
    <Box
      as='svg'
      width='150'
      fill='currentColor'
      stroke='none'
      viewBox='0 0 151.1 28.8'
      {...props}
    >
      <path
        d='M0.56 22.68V0.919998C0.56 0.727999 0.656 0.599998 0.88 0.599998H9.008C10.224 0.599998 11.312 0.823999 12.336 1.272C13.36 1.72 14.16 2.36 14.768 3.224C15.344 4.12 15.664 5.144 15.664 6.36C15.664 7.416 15.44 8.312 15.024 9.048C14.576 9.816 13.968 10.456 13.168 11.032C15.472 12.088 16.624 13.912 16.624 16.504C16.624 17.784 16.336 18.904 15.792 19.864C15.216 20.856 14.448 21.624 13.424 22.168C12.4 22.744 11.216 23 9.872 23H0.88C0.656 23 0.56 22.904 0.56 22.68ZM9.2 9.656C10.128 9.656 10.896 9.432 11.472 8.92C12.048 8.44 12.336 7.704 12.336 6.68C12.336 5.72 12.016 4.984 11.44 4.472C10.864 3.96 10.096 3.704 9.2 3.704H3.888V9.656H9.2ZM9.456 19.896C10.608 19.896 11.536 19.608 12.24 19C12.912 18.392 13.264 17.496 13.264 16.312C13.264 15.224 12.912 14.36 12.208 13.72C11.504 13.112 10.608 12.792 9.456 12.792H3.888V19.896H9.456ZM20.5213 22.712C19.6253 22.296 18.9213 21.688 18.4093 20.92C17.8652 20.152 17.6092 19.192 17.6092 18.104C17.6092 16.44 18.2172 15.128 19.4332 14.168C20.6493 13.24 22.2173 12.76 24.1053 12.76C25.3212 12.76 26.7292 12.984 28.3293 13.432V12.728C28.3293 11.704 28.0093 10.936 27.4333 10.36C26.8253 9.784 25.9933 9.496 24.9053 9.496C23.1773 9.496 22.0573 10.168 21.5133 11.48C21.4493 11.608 21.3853 11.704 21.3212 11.736C21.2573 11.768 21.1613 11.768 21.0652 11.768H18.4413C18.2812 11.768 18.2172 11.704 18.2172 11.576C18.2172 11.448 18.2172 11.352 18.2493 11.256C18.5693 9.912 19.3053 8.824 20.4573 7.928C21.6093 7.064 23.1133 6.616 24.9053 6.616C26.8253 6.616 28.4253 7.16 29.6413 8.248C30.8573 9.336 31.4653 10.744 31.4653 12.504V19.832C31.4653 20.536 31.4973 21.112 31.5933 21.496C31.6573 21.88 31.8173 22.296 32.0413 22.68L32.1053 22.84C32.1053 22.968 32.0093 23 31.8493 23H28.6493C28.4253 23 28.3293 22.904 28.3293 22.68V21.368C27.8173 21.976 27.1453 22.456 26.3133 22.808C25.4813 23.16 24.4893 23.32 23.4013 23.32C22.3773 23.32 21.4173 23.128 20.5213 22.712ZM27.0173 19.288C27.8813 18.52 28.3293 17.496 28.3293 16.216C26.9213 15.768 25.5452 15.544 24.2653 15.544C23.2413 15.544 22.3773 15.768 21.7373 16.184C21.0652 16.6 20.7453 17.208 20.7453 17.976C20.7453 18.776 21.0013 19.384 21.5773 19.8C22.1213 20.248 22.8893 20.44 23.8813 20.44C25.0972 20.44 26.1213 20.056 27.0173 19.288ZM33.8062 22.68V0.919998C33.8062 0.727999 33.9023 0.599998 34.1263 0.599998H36.6223C36.8142 0.599998 36.9423 0.727999 36.9423 0.919998V22.68C36.9423 22.904 36.8142 23 36.6223 23H34.1263C33.9023 23 33.8062 22.904 33.8062 22.68ZM41.4313 22.712C40.5353 22.296 39.8313 21.688 39.3193 20.92C38.7753 20.152 38.5193 19.192 38.5193 18.104C38.5193 16.44 39.1273 15.128 40.3433 14.168C41.5593 13.24 43.1273 12.76 45.0153 12.76C46.2313 12.76 47.6393 12.984 49.2393 13.432V12.728C49.2393 11.704 48.9193 10.936 48.3433 10.36C47.7353 9.784 46.9033 9.496 45.8153 9.496C44.0873 9.496 42.9673 10.168 42.4233 11.48C42.3593 11.608 42.2953 11.704 42.2313 11.736C42.1673 11.768 42.0713 11.768 41.9753 11.768H39.3513C39.1913 11.768 39.1273 11.704 39.1273 11.576C39.1273 11.448 39.1273 11.352 39.1593 11.256C39.4793 9.912 40.2153 8.824 41.3673 7.928C42.5193 7.064 44.0233 6.616 45.8153 6.616C47.7353 6.616 49.3353 7.16 50.5513 8.248C51.7673 9.336 52.3753 10.744 52.3753 12.504V19.832C52.3753 20.536 52.4073 21.112 52.5033 21.496C52.5673 21.88 52.7273 22.296 52.9513 22.68L53.0153 22.84C53.0153 22.968 52.9193 23 52.7593 23H49.5593C49.3353 23 49.2393 22.904 49.2393 22.68V21.368C48.7273 21.976 48.0553 22.456 47.2233 22.808C46.3913 23.16 45.3993 23.32 44.3113 23.32C43.2873 23.32 42.3273 23.128 41.4313 22.712ZM47.9273 19.288C48.7913 18.52 49.2393 17.496 49.2393 16.216C47.8313 15.768 46.4553 15.544 45.1753 15.544C44.1513 15.544 43.2873 15.768 42.6473 16.184C41.9753 16.6 41.6553 17.208 41.6553 17.976C41.6553 18.776 41.9113 19.384 42.4873 19.8C43.0313 20.248 43.7993 20.44 44.7913 20.44C46.0073 20.44 47.0313 20.056 47.9273 19.288ZM54.6522 22.68V7.256C54.6522 7.064 54.7482 6.936 54.9722 6.936H57.4682C57.6602 6.936 57.7882 7.064 57.7882 7.256V8.728C58.2362 8.152 58.8443 7.64 59.6122 7.224C60.3802 6.84 61.1483 6.616 61.9482 6.616C62.9722 6.616 63.8042 6.808 64.5083 7.192C65.1803 7.576 65.7243 8.152 66.1723 8.92C66.7483 8.216 67.4523 7.64 68.2843 7.224C69.1163 6.84 69.9803 6.616 70.9403 6.616C72.5083 6.616 73.6923 7.064 74.5243 7.96C75.3563 8.856 75.7723 10.168 75.7723 11.864V22.68C75.7723 22.904 75.6443 23 75.4523 23H72.9563C72.7323 23 72.6363 22.904 72.6363 22.68V12.376C72.6363 11.416 72.4123 10.68 72.0282 10.2C71.6123 9.752 70.9722 9.496 70.1403 9.496C69.1163 9.496 68.3163 10.008 67.7083 10.968C67.0683 11.96 66.7803 13.304 66.7803 15.032V22.68C66.7803 22.904 66.6523 23 66.4602 23H63.9643C63.7403 23 63.6442 22.904 63.6442 22.68V12.44C63.6442 11.448 63.4202 10.712 63.0363 10.232C62.6202 9.752 61.9803 9.496 61.1163 9.496C60.1562 9.496 59.3562 10.008 58.7162 10.968C58.0763 11.928 57.7882 13.304 57.7882 15.032V22.68C57.7882 22.904 57.6602 23 57.4682 23H54.9722C54.7482 23 54.6522 22.904 54.6522 22.68ZM81.209 22.264C79.961 21.56 79.001 20.568 78.329 19.288C77.625 18.008 77.305 16.568 77.305 14.968C77.305 13.4 77.657 11.992 78.361 10.712C79.065 9.432 80.057 8.44 81.305 7.704C82.521 7 83.897 6.616 85.433 6.616C87.033 6.616 88.473 7 89.689 7.768C90.905 8.536 91.833 9.592 92.473 10.872C93.113 12.152 93.465 13.56 93.465 15.096V15.64C93.465 15.864 93.337 15.96 93.145 15.96H80.633C80.761 17.304 81.273 18.392 82.137 19.224C82.969 20.056 84.089 20.44 85.465 20.44C87.545 20.44 88.985 19.608 89.785 17.944C89.849 17.816 89.881 17.752 89.945 17.72C90.009 17.688 90.105 17.656 90.233 17.656H92.889C93.017 17.656 93.113 17.752 93.113 17.88C93.113 17.976 93.081 18.072 93.049 18.2C92.409 19.928 91.417 21.208 90.137 22.04C88.825 22.904 87.257 23.32 85.401 23.32C83.833 23.32 82.425 22.968 81.209 22.264ZM90.105 13.176C89.817 12.088 89.273 11.192 88.441 10.52C87.609 9.848 86.617 9.496 85.433 9.496C84.313 9.496 83.321 9.816 82.489 10.456C81.625 11.096 81.049 12.024 80.761 13.176H90.105ZM95.0623 22.68V7.256C95.0623 7.064 95.1583 6.936 95.3823 6.936H97.8783C98.0703 6.936 98.1983 7.064 98.1983 7.256V8.6C98.7103 8.024 99.3183 7.544 100.054 7.16C100.758 6.808 101.59 6.616 102.518 6.616C103.35 6.616 104.31 6.808 105.334 7.128C105.462 7.192 105.558 7.256 105.622 7.32C105.686 7.416 105.718 7.544 105.718 7.704V10.2C105.718 10.392 105.622 10.488 105.494 10.488C105.398 10.488 105.302 10.488 105.206 10.424C104.534 10.104 103.958 9.848 103.478 9.72C102.966 9.592 102.454 9.496 101.91 9.496C100.758 9.496 99.8623 9.912 99.1903 10.712C98.5183 11.544 98.1983 12.696 98.1983 14.168V22.68C98.1983 22.904 98.0703 23 97.8783 23H95.3823C95.1583 23 95.0623 22.904 95.0623 22.68Z'
        fill='black'
      />
    </Box>
  )
}

export default Logo