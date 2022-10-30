class User < ApplicationRecord
  has_many :api_v1_memories, class_name: 'Api::V1::Memory', foreign_key: 'user_id', dependent: :destroy

  devise :database_authenticatable,
         :jwt_authenticatable,
         :registerable,
         jwt_revocation_strategy: JwtDenylist
end
