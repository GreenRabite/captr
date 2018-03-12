module ApplicationCable
  class Channel < ActionCable::Channel::Base
    identified_by :current_user

    def connect
      self.current_user = find_verified_user
    end
    
    private
    def find_verified_user
      token = cookies.encrypted[:session_token]
      if token && verified_user = User.find_by(session_token: token)
        verified_user
      else
        reject_unauthorized_connection
      end
    end

  end
end
