package br.org.generation.sustentabilizei.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.org.generation.sustentabilizei.model.Tema;

@Repository
public interface TemaRepository extends JpaRepository <Tema, Long> {

	public List <Tema> findByPalavraChaveContainingIgnoreCase (String palavraChave);
}
