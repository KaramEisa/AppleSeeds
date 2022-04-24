 const users = [
    {
    id: 167464,
    firstName: "Jimmy",
    lastName: "Arnold",
    email: "jimmya@gmail.com",
},
    {
    id: 578447,
    firstName: "Martha",
    lastName: "Goldman",
    email: "gold@hotmail.com",
    },
{
    id: 864578,
    firstName: "Tim",
    lastName: "Burton",
    email: "timmy.hotmail.com",
     },
 ];

 const body = document.querySelector('body');
body.innerHTML = '<ul></ul>';
const ul = body.firstElementChild;

for (const user of users) {
  const userEl = document.createElement('li');
  userEl.textContent = `${user.firstName} ${user.lastName}`;
  ul.append(userEl);
}

ul.style = 'list-style: none';

const allUsersEl = ul.querySelectorAll('li');
allUsersEl.forEach((userEl) => {
  const id = users.find(
    (user) => user.firstName === userEl.textContent.split(' ')[0]
  ).id;
  userEl.setAttribute('data-id', `${id}`);
});

     