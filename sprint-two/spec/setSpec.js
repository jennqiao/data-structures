describe('set', function() {
  var set;

  beforeEach(function() {
    set = Set();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a('function');
    expect(set.contains).to.be.a('function');
    expect(set.remove).to.be.a('function');
  });

  it('should add values to a set', function() {
    set.add('Susan Sarandon');
    set.add('Danny Glover');
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  });

  it('should remove values from a set', function() {
    set.add('Mel Gibson');
    set.remove('Mel Gibson');
    expect(set.contains('Mel Gibson')).to.equal(false);
  });

  it ('should not add duplicate values', function() {
    set.add('Susan Sarandon');
    var replicatedSet = _.extend({}, set);
    set.add('Susan Sarandon');
    expect(set).to.eql(replicatedSet);
  
  });

  it ('should store strings and equivalent numbers separately', function() {
    set.add('3');
    set.add(3);
    set.remove('3');
    expect(set.contains(3)).to.equal(true);
  });

  it ('should store plain objects', function() {
    var obj = {'a': 1, 'b': true};
    set.add(obj);
    expect(set.contains(obj)).to.equal(true);
  });

});
