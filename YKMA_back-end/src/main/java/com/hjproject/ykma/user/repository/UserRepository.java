package com.hjproject.ykma.user.repository;

import com.hjproject.ykma.user.entity.User;
import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
@RequiredArgsConstructor
public class UserRepository {

    private final EntityManager em;

    public Optional<User> findOneByEmail(String email) {
        return em.createQuery("select u from User u where u.email = :email", User.class)
                .setParameter("email", email)
                .getResultList()
                .stream().findAny();
    }

    public User save(User user) {
        if(user.getId() == null) {
            user.setProfile_yn("N");
        } else {
            em.merge(user);
        }
        return user;
    }

}
