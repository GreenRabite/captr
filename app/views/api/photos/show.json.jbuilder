json.owner @photo.owner.username
json.owner_email @photo.owner.email
json.owner_id @photo.owner.id
json.owner_pro_img @photo.owner.profile_img
json.partial! 'photo', photo: @photo
