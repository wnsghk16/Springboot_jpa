package com.occamsrazor.web.lost;

import java.util.List;

import org.springframework.stereotype.Component;

import com.occamsrazor.web.util.Messenger;

@Component
public interface LostService {
	public void register(Lost lost);
	public List<Lost> findAll();
	public Lost findOne(String lostId);
	public Messenger modify(Lost lost);
	public Messenger remove(Lost lost);
}
