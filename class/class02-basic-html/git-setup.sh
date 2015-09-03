ssh-keygen -t rsa -C "your-email@address.edu"
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_rsa
pbcopy < ~/.ssh/id_rsa.pub
ssh -T git@github.com

git config --global user.email "your-email@address.edu"
